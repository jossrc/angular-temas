import { Component, OnInit } from '@angular/core';
import {Hero} from '../../interfaces/heroes.interface';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  public term: string = '';
  public heroList: Hero[] = [];

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void { }

  searchHero(): void {
    this.heroesService.getHeroes().subscribe(
      heroes => this.heroList = heroes
    );
  }

}
