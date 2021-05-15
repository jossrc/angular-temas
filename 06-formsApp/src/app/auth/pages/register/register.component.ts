import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {
  //TODO: Temporal
  fullNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  isValidUsername(control: FormControl) {
    const value: string | null = control.value?.trim().toLowerCase();
    if (value === 'strider') {
      // Sí hay error - objeto
      return {
        isStrider: true,
      };
    }
    // No hay error
    return null;
  }

  myForm: FormGroup = this.formBuilder.group({
    txtName: [
      '',
      [Validators.required, Validators.pattern(this.fullNamePattern)],
    ],
    txtUsername: ['', [Validators.required, this.isValidUsername]],
    txtEmail: [
      '',
      [Validators.required, Validators.pattern(this.emailPattern)],
    ],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // Estableciendo valores por defecto
    this.myForm.reset({
      txtName: 'Jose Robles',
      txtUsername: 'jossrc',
      txtEmail: 'test1@test.com',
    });
  }

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
