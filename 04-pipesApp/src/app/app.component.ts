import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string = 'Jose robLeS';
  value: number = 1000;

  obj = {
    name: this.name
  };

  showName(): void {
    console.log(`Hi, my name is ${this.name}`);
  }
}
