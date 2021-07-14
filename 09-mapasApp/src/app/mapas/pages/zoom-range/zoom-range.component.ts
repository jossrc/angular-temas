import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
      .mapa-container {
        width: 100%;
        height: 100%;
      }

      .row {
        width: 400px;
        background-color: white;
        border-radius: 15px;
        position: fixed;
        bottom: 50px;
        left: 50px;
        padding: 10px;
        z-index: 999;
        -webkit-box-shadow: 4px 8px 15px 0px rgba(0, 0, 0, 0.78);
        box-shadow: 4px 8px 15px 0px rgba(0, 0, 0, 0.78);
      }
    `,
  ],
})
export class ZoomRangeComponent implements AfterViewInit {
  // Obtenemos el elemento <div #mapa> por su referencia
  @ViewChild('mapa')
  mapaContainer!: ElementRef;

  miMapa!: mapboxgl.Map;

  zoomLevel: number = 17;

  constructor() {}

  /**
   * Se requiere de este método debido a que necesitamos obtener el elemento
   * (<div #mapa>) cuando la vista se haya cargado por completo (después del onInit)
   **/
  ngAfterViewInit(): void {
    this.miMapa = new mapboxgl.Map({
      // El container también puede recibir un elemento html (tener cuidado con el ID)
      container: this.mapaContainer.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-77.0296675277514, -12.120856900175406],
      zoom: this.zoomLevel,
    });

    // Evento de zoom
    this.miMapa.on('zoom', () => {
      // Actualizar el nivel de zoom
      const zoomActual = this.miMapa.getZoom();
      this.zoomLevel = zoomActual;
    });

    // Evento cuando termine el zoom
    this.miMapa.on('zoomend', () => {
      if (this.miMapa.getZoom() > 19) {
        this.miMapa.zoomTo(19);
      }
    });
  }

  zoomOut(): void {
    // Alejar
    this.miMapa.zoomOut();
  }

  zoomIn(): void {
    // Acercar
    this.miMapa.zoomIn();
  }

  // Cambiar el zoom con el input range
  zoomCambio(valor: string): void {
    this.miMapa.zoomTo(Number(valor))
  }

}
