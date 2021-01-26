import { Injectable } from "@angular/core";
import { Character } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

  private _characters: Character[] = [
    { name: 'Goku', power: 15000 },
    { name: 'Krillin', power: 700 },
    { name: 'Vegeta', power: 14000 },
  ];

  constructor() {
    console.log('Servicio Inicializado');
  }

  /**
   * Retorna un arreglo de todos los personajes de DBZ.
   * Además evita el manejo y la relación de los objetos por referencia
   */
  get characters(): Character[] {
    return [...this._characters];
  }


}
