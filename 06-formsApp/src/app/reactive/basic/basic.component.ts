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
    txtProductName: [, [Validators.required, Validators.minLength(3)]],
    txtProductPrice: [, [Validators.required, Validators.min(0)]],
    txtProductStock: [, [Validators.required, Validators.min(0)]],
  });

  constructor(private formBuilder: FormBuilder) {}

  isValidField(field: string) {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }
}
