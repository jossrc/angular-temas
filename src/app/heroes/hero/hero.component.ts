import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  heroName: string = 'Iron Man';
  age: number = 45;


  get capitalizedName() : string {
    return this.heroName.toUpperCase()
  }

  getName = (): string => `${this.heroName} - ${this.age}`;
}
