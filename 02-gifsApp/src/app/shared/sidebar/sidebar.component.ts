import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  /**
   * Retorna los diez últimas búsquedas realizadas
   */
  get history(): string[] {
    return this.gifsService.history.splice(0, 10);
  }

  constructor(private gifsService: GifsService) {}

  ngOnInit(): void {}
}
