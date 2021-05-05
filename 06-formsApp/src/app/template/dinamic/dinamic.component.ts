import { Component } from '@angular/core';

interface Person {
  name: string;
  favorites: Favorite[];
}

interface Favorite {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dinamic',
  templateUrl: './dinamic.component.html',
  styles: [
  ]
})
export class DinamicComponent {

  newGame: string = "";

  person: Person = {
    name: 'Jose Robles',
    favorites: [
      { id: 1, name: 'Dark Souls' },
      { id: 2, name: 'Bloodborne' },
    ]
  }

  addNewGame(): void {
    const favorite: Favorite = {
      id: this.person.favorites.length + 1,
      name: this.newGame
    }

    this.person.favorites.push({...favorite});
    this.newGame = '';

  }

  remove(index: number): void {
    this.person.favorites.splice(index, 1);
  }

  save(): void {
    console.log('Enviando')
  }

}
