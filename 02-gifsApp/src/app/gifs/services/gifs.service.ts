import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _history: string[] = [];
  private _url: string = 'https://api.giphy.com/v1/gifs/search';
  private _apiKey: string = '';

  /**
   * Retorna un arreglo de todas las busquedas realizadas
   */
  get history() {
    return [...this._history];
  }

  constructor(private http: HttpClient) {}

  /**
   * Busca un gif mediante la API de Giphy y
   * lo agrega en la posición inicial del historial de busquedas: `history`
   * @param query Valor a buscar
   */
  searchGifs = (query: string) => {
    query = query.trim().toLowerCase();
    if (!this._history.includes(query)) {
      this._history.unshift(query);
    }

    const fullUrl = `${this._url}?api_key=${this._apiKey}&q=${encodeURIComponent(query)}&limit=10`;

    this.http.get(fullUrl).subscribe((response: any) => {
      console.log(response.data);
    });

    console.log(this._history);
  };
}
