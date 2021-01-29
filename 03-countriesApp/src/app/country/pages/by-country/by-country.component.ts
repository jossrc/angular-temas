import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  public word: string = '';
  public errorFound: boolean = false;

  constructor(private countryService: CountryService) {}

  searchCountry = () => {
    this.errorFound = false;
    this.countryService.search(this.word).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        this.errorFound = true;
      }
    );
  };
}
