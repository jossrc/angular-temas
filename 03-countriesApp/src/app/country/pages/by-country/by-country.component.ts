import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  public word: string = ''

  constructor(private countryService: CountryService) {

  }

  searchCountry = () => {
    console.log(this.word);
    this.countryService.search(this.word).subscribe( data => {
      console.log(data);
    });
  }


}
