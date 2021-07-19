import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor( private router: Router ) { }

  logout() {
    this.router.navigateByUrl('/auth')
  }

}
