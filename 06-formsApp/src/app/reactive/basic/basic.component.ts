import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: [],
})
export class BasicComponent {

  myForm: FormGroup = new FormGroup({
    txtProductName: new FormControl('RTX 4080ti'),
  });

  constructor() {}
}
