import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: [],
})
export class BasicComponent {
  // null, 0, etc.
  myForm: FormGroup = this.formBuilder.group({
    txtProductName: [
      'RTX 4080ti',
      [Validators.required, Validators.minLength(3)],
    ],
    txtProductPrice: [1500, [Validators.required, Validators.min(0)]],
    txtProductStock: [5, [Validators.required, Validators.min(0)]],
  });

  constructor(private formBuilder: FormBuilder) {}
}
