import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class ByCountryComponent {
  public word: string = '';
  public errorFound: boolean = false;
  public countries: Country[] = [];
  public activateSuggestions: boolean = false;
  public suggestedCountries: Country[] = [];

  constructor(private countryService: CountryService) {}

  searchCountry(country: string){
    this.activateSuggestions = false;
    this.errorFound = false;
    this.word = country;
    this.countryService.search(country).subscribe(
      (respCountry) => {
        this.countries = respCountry;
      },
      (err) => {
        this.errorFound = true;
        this.countries = [];
      }
    );
  };

  displaySuggestions(country: string) {
    this.errorFound = false;
    this.word = country;
    this.activateSuggestions = true;
    this.countryService.search(country).subscribe(
      (dataCountries) => (this.suggestedCountries = dataCountries.splice(0, 5)),
      (err) => (this.suggestedCountries = [])
    );
  };

  searchSuggestions(word: string) {
    this.searchCountry(word)
  }

}
