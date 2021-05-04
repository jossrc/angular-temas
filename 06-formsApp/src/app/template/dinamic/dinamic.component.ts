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

  person: Person = {
    name: 'Jose Robles',
    favorites: [
      { id: 1, name: 'Dark Souls' },
      { id: 2, name: 'Bloodborne' },
    ]
  }

  save(): void {
    console.log('Enviando')
  }

}
