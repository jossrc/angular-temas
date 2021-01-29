import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  public word: string = '';
  public errorFound: boolean = false;
  public countries: Country[] = []

  constructor(private countryService: CountryService) {}

  searchCountry = () => {
    this.errorFound = false;
    this.countryService.search(this.word).subscribe(
      (respCountry) => {
        this.countries = respCountry;
      },
      (err) => {
        this.errorFound = true;
        this.countries = []
      }
    );
  };
}
