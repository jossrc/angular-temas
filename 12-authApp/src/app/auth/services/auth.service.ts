import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse, Usuario } from '../interfaces/interfaces';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;

  get usuario() {
    return { ...this._usuario };
  }

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<boolean> {
    const url = `${this.baseUrl}/auth`;
    const body = { email, password };

    return this.http.post<AuthResponse>(url, body).pipe(
      tap((resp) => {
        if (resp.ok) {
          this._usuario = {
            name: resp.name!,
            uid: resp.uid!,
          };
        }
      }),
      // Retornando true si la respuesta es 200
      map((resp) => resp.ok), // retorna un boolean ya no una respuesta
      // Retornando false si la respuesta es 40X
      catchError((err) => of(false))
    );
  }
}
