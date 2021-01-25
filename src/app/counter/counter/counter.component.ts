import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>
      {{ title }}
    </h1>

    <h3>La base es: {{ base }}</h3>

    <button (click)="accumulate(base)">+{{ base }}</button>

    <span> {{ count }} </span>

    <button (click)="accumulate(-base)">-{{ base }}</button>
  `,
})
export class CounterComponent {
  public title: string = 'Contador App';

  public count: number = 0;
  public base: number = 5;

  accumulate = (value: number) => {
    this.count += value;
  };
}
