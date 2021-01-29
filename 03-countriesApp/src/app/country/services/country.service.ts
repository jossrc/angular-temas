import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private _apiUrl:string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  /**
   * Busca y retorna una lista de Países que coincidan con la busqueda,
   * el retorno se encuentra como Observable. Adicionalmente, este método utiliza
   * la API de RestCountries, por lo que las busquedas deben estar en ingles.
   */
  search( country: string): Observable<any> {
    const url = `${this._apiUrl}/name/${country}`
    return this.http.get(url);
  }

}
