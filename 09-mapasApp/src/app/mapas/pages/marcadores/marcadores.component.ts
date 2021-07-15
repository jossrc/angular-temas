import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarcadorColor {
  color: string;
  marker?: mapboxgl.Marker;
  centro?: [number, number];
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
      .mapa-container {
        width: 100%;
        height: 100%;
      }

      .list-group {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 99;
      }

      li {
        cursor: pointer;
      }
    `,
  ],
})
export class MarcadoresComponent implements AfterViewInit {
  @ViewChild('mapa')
  mapaContainer!: ElementRef;

  miMapa!: mapboxgl.Map;

  zoomLevel: number = 17;

  // Longitud y Latitud (tupla)
  center: [number, number] = [-77.0296675277514, -12.120856900175406];

  // Arreglo de marcadores
  marcadores: Array<MarcadorColor> = [];

  constructor() {}

  ngAfterViewInit(): void {
    this.miMapa = new mapboxgl.Map({
      container: this.mapaContainer.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel,
    });

    // Verificar si existe algun marcador en localStorage
    this.leerLocalStorage();

    /*
    Creando un marcador, estableciendo su posición y agregandolo al mapa
    El Marker recibe como parámetro opcional un objeto cuya propiedad element
    nos permite cambiar el elemento del marcador (por ejemplo, una etiqueta o una imagen)
    const marker = new mapboxgl.Marker()
      .setLngLat(this.center)
      .addTo(this.miMapa);
    */
  }

  /**
   * Método para crear y agregar un marcador en el centro del mapa
   */
  agregarMarcador() {
    // random color
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );

    const nuevoMarcador = new mapboxgl.Marker({
      draggable: true,
      color,
    })
      .setLngLat(this.center)
      .addTo(this.miMapa);

    // Creamos una nueva interface para almacenar el color y el marker
    // ya que actualmente no existe un getColor() en el marcador
    this.marcadores.push({
      color,
      marker: nuevoMarcador,
    });

    this.guardarMarcadoresLocalStorage();
  }

  /**
   * Método para movernos al marcador
   **/
  irMarcador(marker: mapboxgl.Marker) {
    this.miMapa.flyTo({
      center: marker.getLngLat(),
    });
  }

  guardarMarcadoresLocalStorage() {
    const lngLatArr: MarcadorColor[] = [];

    this.marcadores.forEach((m) => {
      const color = m.color;
      const { lng, lat } = m.marker!.getLngLat();

      // La lng y lat se actualizan al mover ya que se pasa por referencia
      lngLatArr.push({ color, centro: [lng, lat] });
    });

    localStorage.setItem('marcadores', JSON.stringify(lngLatArr));
  }

  leerLocalStorage() {
    if (!localStorage.getItem('marcadores')) {
      return;
    }

    const lngLatArr: MarcadorColor[] = JSON.parse(
      localStorage.getItem('marcadores')!
    );

    lngLatArr.forEach((m) => {
      const newMarker = new mapboxgl.Marker({
        color: m.color,
        draggable: true,
      })
        .setLngLat(m.centro!)
        .addTo(this.miMapa);

      this.marcadores.push({
        marker: newMarker,
        color: m.color,
      });
    });
  }
}
