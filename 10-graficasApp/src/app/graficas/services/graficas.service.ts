import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http: HttpClient) { }

  /**
   * Obtener la cantidad de usuarios en las redes sociales
   * usando el archivo db.json ( usando json-server)
  */
  getUsuariosRedesSociales() {
    return this.http.get('http://localhost:3000/grafica');
  }

}
