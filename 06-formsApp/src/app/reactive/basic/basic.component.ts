import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: [],
})
export class BasicComponent implements OnInit {
  // null, 0, etc.
  myForm: FormGroup = this.formBuilder.group({
    txtProductName: [, [Validators.required, Validators.minLength(3)]],
    txtProductPrice: [, [Validators.required, Validators.min(0)]],
    txtProductStock: [, [Validators.required, Validators.min(0)]],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.reset({
      txtProductName: 'RTX 4080ti',
      txtProductPrice: 1600,
      txtProductStock: 10
    })
  }

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
    this.myForm.reset();
  }
}
