import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /**
   * Se establece en el inicio para que toda la aplicación
   * tenga acceso a mapbox con el token
   **/
  ngOnInit(): void {
    // Se establece el token de acceso
    (mapboxgl as any).accessToken = environment.mapboxToken;
  }
}
