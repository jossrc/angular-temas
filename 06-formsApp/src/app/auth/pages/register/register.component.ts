import { Component, OnInit } from '@angular/core';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup = this.formBuilder.group(
    {
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
        [this.emailValidator],
      ],
      txtPassword: ['', [Validators.required, Validators.minLength(6)]],
      txtPassword2: ['', [Validators.required]],
    },
    {
      validators: [
        this.validatorService.compareFields('txtPassword', 'txtPassword2'),
      ],
    }
  );

  constructor(
    private formBuilder: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService
  ) {}

  ngOnInit(): void {
    // Estableciendo valores por defecto
    this.myForm.reset({
      txtName: 'Jose Robles',
      txtUsername: 'jossrc',
      txtEmail: 'test1@test.com',
      txtPassword: '123456',
      txtPassword2: '123456',
    });
  }

  isValidField(field: string) {
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched;
  }

  emailRequired() {
    return (
      this.myForm.get('txtEmail')?.errors?.required &&
      this.myForm.get('txtEmail')?.touched
    );
  }

  emailFormat() {
    return (
      this.myForm.get('txtEmail')?.errors?.pattern &&
      this.myForm.get('txtEmail')?.touched
    );
  }

  emailRepeated() {
    return (
      this.myForm.get('txtEmail')?.errors?.existsEmail &&
      this.myForm.get('txtEmail')?.touched
    );
  }

  submitForm() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
  }
}
