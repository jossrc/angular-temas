import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent implements OnInit {
  public term: string = '';
  public heroList: Hero[] = [];
  public heroFound: Hero | undefined;
  public warningMessage = '';

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {}

  searchHero(): void {
    this.heroesService
      .getSuggestions(this.term.trim())
      .subscribe((heroes) => (this.heroList = heroes));
  }

  heroSelected(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.heroFound = undefined;
      return;
    }

    const heroValue: Hero = event.option.value;
    this.term = heroValue.superhero;

    this.heroesService
      .getHeroById(heroValue.id!)
      .subscribe((hero) => (this.heroFound = hero));
  }
}
