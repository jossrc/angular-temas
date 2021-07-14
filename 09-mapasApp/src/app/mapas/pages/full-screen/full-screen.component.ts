import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [
    `
    #mapa {
      width: 100%;
      height: 100%
    }
    `
  ],
})
export class FullScreenComponent implements OnInit {
  constructor() {}

  /**
   * Para que funcione es necesario establecer un ancho y alto al body,
   * también el contenedor debe tener su ancho y alto
   *
   * */
  ngOnInit(): void {
    var map = new mapboxgl.Map({
      // Se agrega el id del contenedor
      // el container y style es suficiente para que funcione
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      // Si queremos establecer una posición inicial
      center: [ -77.0296675277514, -12.120856900175406 ], // [lng, lat]
      zoom: 17 // Se necesita del zoom para que no se vea muy alejado
    });
  }
}
