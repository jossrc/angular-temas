import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [],
})
export class ByCapitalComponent {
  public errorFound: boolean = false;
  public word: string = '';
  public countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  searchCountryByCapital = (capital: string) => {
    this.errorFound = false;
    this.word = capital;
    this.countryService.searchByCapital(capital).subscribe(
      (respCountry) => {
        this.countries = respCountry;
      },
      (err) => {
        this.errorFound = false;
        this.countries = [];
      }
    );
  };

  displaySuggestions = (capital: string) => {
    this.errorFound = false;
    console.log(capital);
  };
}
