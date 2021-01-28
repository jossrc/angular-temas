import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _history: string[] = [];
  private _url: string = 'https://api.giphy.com/v1/gifs/search';
  private _apiKey: string = '';

  // TODO: Camabiar el tipo
  /**
   * Retorna los primeros diez datos obtenidos en la busqueda.
   */
  public dataGifs: any[] = [];

  /**
   * Retorna un arreglo de todas las busquedas realizadas
   */
  get history() {
    return [...this._history];
  }

  constructor(private http: HttpClient) {}

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
    }

    const fullUrl = `${this._url}?api_key=${this._apiKey}&q=${encodeURIComponent(query)}&limit=10`;

    this.http.get(fullUrl).subscribe((response: any) => {
      console.log(response.data);
      this.dataGifs = response.data
    });

  };
}
