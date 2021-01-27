import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _history: string[] = []

  get history() {
    return [...this._history]
  }

  constructor() { }

  /**
   * Busca un gift mediante la API de Giphy y
   * lo agrega en el historial de busquedas `history`
   * @param query Valor a buscar
   */
  searchGifs = ( query: string) => {
    this._history.unshift(query)
    console.log(this._history);
  }
}
