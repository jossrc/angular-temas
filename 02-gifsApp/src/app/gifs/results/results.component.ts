import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [
  ]
})
export class ResultsComponent {

  get results() {
    return this.gifsService.dataGifs
  }

  constructor(private gifsService: GifsService) { }


}
