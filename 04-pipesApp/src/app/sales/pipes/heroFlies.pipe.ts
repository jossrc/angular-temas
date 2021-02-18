import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'heroFlies'
})
export class HeroFliesPipe implements PipeTransform{
  transform(value: boolean): string {
    return (value) ? 'si vuela' : 'no vuela';
  }
}
