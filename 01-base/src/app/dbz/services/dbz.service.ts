import { Injectable } from "@angular/core";

@Injectable()
export class DbzService {

  /**
   * Se crea hasta que alguien lo utilice
   *
   */

  constructor() {
    console.log('Servicio Inicializado');
  }


}
