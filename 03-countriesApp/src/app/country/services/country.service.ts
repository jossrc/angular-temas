import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private _apiUrl: string = 'https://restcountries.eu/rest/v2';

  get httpParams() {
    return new HttpParams().set(
      'fields',
      'name;capital;alpha2Code;flag;population'
    );
  }

  constructor(private http: HttpClient) {}

  /**
   * Busca y retorna una lista de Países que coincidan con la busqueda,
   * el retorno se encuentra como Observable. Adicionalmente, este método utiliza
   * la API de RestCountries, por lo que las busquedas deben estar en ingles.
   */
  search(country: string): Observable<Country[]> {
    const url = `${this._apiUrl}/name/${country}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  /**
   * Busca y retorna una lista de Países que coincidan con la busqueda de su
   * respectiva capital, el retorno se encuentra como Observable.
   * Adicionalmente, este método utiliza la API de RestCountries,
   * por lo que las busquedas deben estar en ingles.
   */
  searchByCapital(capital: string): Observable<Country[]> {
    const url = `${this._apiUrl}/capital/${capital}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  /**
   * Busca y retorna un País según su Alpha ID. El retorno se encuentra
   * como Observable.
   */
  getCountryByID(id: string): Observable<Country> {
    const url = `${this._apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  /**
   * Busca y retorna una lista de Países que coincidan con la busqueda de su
   * respectiva región, el retorno se encuentra como Observable.
   * Adicionalmente, este método utiliza la API de RestCountries,
   * por lo que las busquedas deben estar en ingles.
   */
  searchByRegion(region: string): Observable<Country[]> {
    const url = `${this._apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
}
