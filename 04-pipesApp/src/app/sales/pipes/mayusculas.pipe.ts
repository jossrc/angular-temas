import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{
  transform(value: string, enableUppercase: boolean = true): string {
    return (enableUppercase) ? value.toLocaleUpperCase() : value.toLocaleLowerCase();
  }
}
