import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {

  private _history: string[] = [];
  private _url: string = 'https://api.giphy.com/v1/gifs/search';
  private _apiKey: string = '';

  /**
   * Retorna los primeros diez datos obtenidos en la busqueda.
   */
  public dataGifs: Gif[] = [];

  /**
   * Retorna las diez últimas consultas encontradas en el historial de busquedas
   */
  get history() {
    return [...this._history];
  }

  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) || []
    this.dataGifs = JSON.parse(localStorage.getItem('data')!) || []
  }

  /**
   * Busca el gif mediante la API de Giphy, cuyo resultado es la
   * obtención de los diez primeros datos encontrados en ella,
   * estas se almacenan y se sobreescriben en el `dataGifs` para su uso.
   *
   * Adicionalmente la consulta se agrega en la posición inicial
   * del historial de busquedas: `history`
   * @param query Valor a buscar
   */
  searchGifs = (query: string) => {
    query = query.trim().toLocaleLowerCase();

    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0,10)
      localStorage.setItem('history', JSON.stringify(this._history))

    }

    const fullUrl = `${this._url}?api_key=${
      this._apiKey
    }&q=${encodeURIComponent(query)}&limit=10`;

    this.http
      .get<SearchGifsResponse>(fullUrl)
      .subscribe((response) => {
        this.dataGifs = response.data
        localStorage.setItem('data', JSON.stringify(this.dataGifs))
      });
  };
}
