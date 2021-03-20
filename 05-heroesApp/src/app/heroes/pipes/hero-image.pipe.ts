import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heroes.interface';

@Pipe({
  name: 'heroImage',
})
export class HeroImagePipe implements PipeTransform {
  transform(hero: Hero): string {
    if (hero && hero.id) {
      return `assets/heroes/${hero.id}.jpg`;
    }
    return 'assets/no-image.png';
  }
}
