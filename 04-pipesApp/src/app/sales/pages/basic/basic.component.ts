import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: [
  ]
})
export class BasicComponent {

  lowerName = 'jose robles';
  upperName = 'JOSE ROBLES';
  fullName = 'joSE rOBLes';

  today = new Date();

}
