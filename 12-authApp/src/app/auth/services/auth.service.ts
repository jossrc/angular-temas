import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
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

  login(email: string, password: string): Observable<boolean | string> {
    const url = `${this.baseUrl}/auth`;
    const body = { email, password };

    return this.http.post<AuthResponse>(url, body).pipe(
      tap((resp) => {
        if (resp.ok) {
          localStorage.setItem('token', resp.token!);
          this._usuario = {
            name: resp.name!,
            uid: resp.uid!,
          };
        }
      }),
      // Retornando true si la respuesta es 200
      map((resp) => resp.ok), // retorna un boolean ya no una respuesta
      // Retornando false si la respuesta es 40X - el 40X siempre da error
      catchError(
        (err: HttpErrorResponse): Observable<string> => of(err.error.msg)
      )
    );
  }

  validarToken(): Observable<boolean> {
    const url = `${this.baseUrl}/auth/renew`;
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    ); // Mandamos el header personalizado

    return this.http.get<AuthResponse>(url, { headers }).pipe(
      map((resp) => {
        // Cuando viene la respuesta exitosa (20X)
        localStorage.setItem('token', resp.token!);
        this._usuario = {
          name: resp.name!,
          uid: resp.uid!,
        };

        return resp.ok;
      }),
      catchError((err: HttpErrorResponse) => of(false))
    );
  }

  logout() {
    localStorage.clear();
  }

}
