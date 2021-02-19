import {Component} from '@angular/core';
import {Color, Hero} from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  enableUppercase = true;

  orderBy = 'no-order';

  heroes: Hero[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.black
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.green
    },
    {
      name: 'Daredevil',
      fly: false,
      color: Color.red
    },
    {
      name: 'Linterna Verde',
      fly: true,
      color: Color.green
    }
  ];

  toggleUppercase(): void {
    this.enableUppercase = !this.enableUppercase;
  }

  changeOrder( value: string): void {
    this.orderBy = value;
  }

}
