import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  add = (event: any) => {
    event.preventDefault()
    console.log(event);
  }

}
