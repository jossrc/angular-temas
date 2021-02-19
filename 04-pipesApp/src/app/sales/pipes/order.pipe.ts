import { Pipe, PipeTransform } from '@angular/core';
import {Hero} from '../interfaces/sales.interfaces';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(heroes: Hero[], orderBy: string = 'no-order'): Hero[] {

    switch ( orderBy ) {
      case 'name':
        return heroes.sort( (a, b) => (a.name > b.name) ? 1 : -1);
      case 'fly':
        return heroes.sort( (a, b) => (a.fly > b.fly) ? -1 : 1);
      case 'color':
        return heroes.sort( (a, b) => (a.color > b.color) ? 1 : -1);
      default:
        return heroes;
    }

  }

}
