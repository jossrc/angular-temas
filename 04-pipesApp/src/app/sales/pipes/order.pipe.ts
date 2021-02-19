import { Pipe, PipeTransform } from '@angular/core';
import {Hero} from '../interfaces/sales.interfaces';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(heroes: Hero[]): Hero[] {
    return heroes.sort( (a, b) => (a.name > b.name) ? 1 : -1);
  }

}
