import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { CountrySmall, Country } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private baseUrl: string = 'https://restcountries.eu/rest/v2';

  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  get regiones(): string[] {
    return [...this._regiones];
  }

  constructor(private http: HttpClient) { }

  getPaisesPorRegion(region: string): Observable<CountrySmall[]> {

    const fullUrl = `${this.baseUrl}/region/${region}?fields=alpha3Code;name`;

    return this.http.get<CountrySmall[]>(fullUrl);
  }

  getPaisPorCodigo(codigo: string): Observable<Country | null> {

    if (!codigo) {
      return of(null)
    }

    const url = `${this.baseUrl}/alpha/${codigo}`;

    return this.http.get<Country>(url);
  }

  getPaisSmallPorCodigo(codigo: string): Observable<CountrySmall> {

    const url = `${this.baseUrl}/alpha/${codigo}?fields=alpha3Code;name`;

    return this.http.get<CountrySmall>(url);
  }

  getPaisesPorCodigos(borders: string[]): Observable<CountrySmall[]> {
    if (!borders) {
      return of([])
    }

    const peticiones: Observable<CountrySmall>[] = [];

    borders.forEach( codigo => {
      const peticion = this.getPaisSmallPorCodigo(codigo);
      peticiones.push(peticion);
    });

    // Combina todos los observables en uno solo
    return combineLatest( peticiones );
  }


}
