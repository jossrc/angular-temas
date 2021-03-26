import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;

  get auth(): Auth {
    return { ...this._auth! };
  }

  constructor(private http: HttpClient) {}

  login(): Observable<Auth> {
    return this.http.get<Auth>(`${this.baseUrl}/users/1`).pipe(
      // Efecto secundario
      tap((auth) => (this._auth = auth))
    );
  }

  logout(): void {
    this._auth  = undefined;
  }

}
