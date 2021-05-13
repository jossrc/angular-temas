import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamic',
  templateUrl: './dinamic.component.html',
  styles: [],
})
export class DinamicComponent {
  myForm: FormGroup = this.formBuilder.group({
    txtPersonName: ['', [Validators.required, Validators.minLength(3)]],
  });

  constructor(private formBuilder: FormBuilder) {}

  isValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  save(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
  }
}
