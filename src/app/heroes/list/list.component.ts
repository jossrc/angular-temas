import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  deletedHeroes: string[] = [];

  deleteLastHero = (): void => {
    const deletedHero = this.heroes.pop();

    if (deletedHero) this.deletedHeroes.push(deletedHero);
  };
}
