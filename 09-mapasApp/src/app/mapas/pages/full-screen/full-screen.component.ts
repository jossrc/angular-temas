import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

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
    // Se establece el token de acceso
    (mapboxgl as any).accessToken = environment.mapboxToken;
    var map = new mapboxgl.Map({
      // Se agrega el id del contenedor
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
    });
  }
}
