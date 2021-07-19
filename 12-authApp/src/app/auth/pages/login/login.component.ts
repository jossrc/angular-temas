import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent {
  private emailPattern: RegExp =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  miFormulario: FormGroup = this.formBuilder.group({
    // El nombre de los campos debe ser parecido al que se espera recibir en el backend
    email: [
      'test1@test.com',
      [Validators.required, Validators.pattern(this.emailPattern)],
    ],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  login() {
    console.log(this.miFormulario.value);
    // this.router.navigateByUrl('/dashboard');
    const { email, password } = this.miFormulario.value;
    this.authService.login(email, password).subscribe((resp) => {
      console.log(resp);
    });
  }
}
