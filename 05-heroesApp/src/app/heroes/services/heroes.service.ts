import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Hero } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private url: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  /**
   * Retorna una lista de héroes en forma de Observable
   */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.url}/heroes`);
  }

  /**
   * Retorna un de héroe por su id en forma de Observable
   */
  getHeroById(id: string): Observable<Hero> {
    return this.http.get<Hero>(`${this.url}/heroes/${id}`);
  }

  /**
   * Obtiene los primeros seis héroes encontrados
   * según el termino ingresado.
   * @param term Héroe a buscar
   */
  getSuggestions(term: string): Observable<Hero[]> {
    const params = new HttpParams().set('q', term).set('_limit', '6');

    return this.http.get<Hero[]>(`${this.url}/heroes`, { params });
  }
}
