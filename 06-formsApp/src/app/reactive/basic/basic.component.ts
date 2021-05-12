import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: [],
})
export class BasicComponent {

  myForm: FormGroup = this.formBuilder.group({
    txtProductName: ['RTX 4080ti'],
    txtProductPrice: [1500],
    txtProductStock: [5],
  });

  constructor(private formBuilder: FormBuilder) {}
}
