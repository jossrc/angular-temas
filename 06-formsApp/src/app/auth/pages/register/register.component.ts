import { Component, OnInit } from '@angular/core';
import { ValidatorService } from '../../../shared/validator/validator.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup = this.formBuilder.group({
    txtName: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validatorService.fullNamePattern),
      ],
    ],
    txtUsername: [
      '',
      [Validators.required, this.validatorService.isValidUsername],
    ],
    txtEmail: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validatorService.emailPattern),
      ],
    ],
  });

  constructor(
    private formBuilder: FormBuilder,
    private validatorService: ValidatorService
  ) {}

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
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
  }
}
