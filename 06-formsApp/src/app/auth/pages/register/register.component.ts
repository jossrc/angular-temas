import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {
  //TODO: Temporal
  fullNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';

  myForm: FormGroup = this.formBuilder.group({
    txtName: [
      '',
      [Validators.required, Validators.pattern(this.fullNamePattern)],
    ],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  isValidField(field: string) {
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched;
  }

  submitForm() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      return;
    }

    this.myForm.markAllAsTouched();
  }
}
