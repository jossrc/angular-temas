import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  enableUppercase = true;

  constructor() { }

  toggleUppercase(): void {
    this.enableUppercase = !this.enableUppercase;
  }

}
