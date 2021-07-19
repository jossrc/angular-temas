import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
      * {
        margin: 15px;
      }

      button {
        background-color: skyblue;
        padding: 10px
      }
    `
  ]
})
export class DashboardComponent {

  /*
    Cada vez que se va a esta página el guard ejecuta el servicio
    que valida el token y obtiene un usuario para su uso.
  */
  get usuario() {
    return this.authService.usuario;
  }

  constructor( private router: Router, private authService: AuthService ) { }

  logout() {
    this.router.navigateByUrl('/auth')
    this.authService.logout();
  }

}
