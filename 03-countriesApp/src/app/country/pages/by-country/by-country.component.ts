import { Component } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  public word: string = ''

  searchCountry = () => {
    console.log(this.word);
  }


}
