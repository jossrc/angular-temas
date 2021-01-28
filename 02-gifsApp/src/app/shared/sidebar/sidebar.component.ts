import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  /**
   * Retorna un arreglo de las diez últimas busquedas realizadas
   */
  get history(): string[] {
    return this.gifsService.history;
  }

  constructor(private gifsService: GifsService) {}

  /**
   * Busca y actualiza los gifs obtenidos en el resultado
   */
  searchGif = (gifName: string) => {
    this.gifsService.searchGifs(gifName);
  }

  ngOnInit(): void {}
}
