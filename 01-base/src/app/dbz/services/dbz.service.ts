import { Injectable } from "@angular/core";
import { Character } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

  characters: Character[] = [
    { name: 'Goku', power: 15000 },
    { name: 'Krillin', power: 700 },
    { name: 'Vegeta', power: 14000 },
  ];

  constructor() {
    console.log('Servicio Inicializado');
  }


}
