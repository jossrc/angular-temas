import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _history: string[] = [];


  /**
   * Retorna un arreglo de todas las busquedas realizadas
   */
  get history() {
    return [...this._history];
  }

  constructor() {}

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
    console.log(this._history);
  };
}
