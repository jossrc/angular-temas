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

    // Creando un marcador, estableciendo su posición y agregandolo al mapa
    // El Marker recibe como parámetro opcional un objeto cuya propiedad element
    // nos permite cambiar el elemento del marcador (por ejemplo, una etiqueta o una imagen)
    const marker = new mapboxgl.Marker()
      .setLngLat(this.center)
      .addTo(this.miMapa);
  }
}
