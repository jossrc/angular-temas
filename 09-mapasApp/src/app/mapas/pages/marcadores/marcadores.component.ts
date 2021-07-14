import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

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

  constructor() {}

  ngAfterViewInit(): void {
    this.miMapa = new mapboxgl.Map({
      container: this.mapaContainer.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel,
    });

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
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));

    const marker = new mapboxgl.Marker({
      draggable: true,
      color
    })
    .setLngLat(this.center)
    .addTo(this.miMapa);
  }


  irMarcador() {

  }

}
