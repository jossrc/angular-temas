import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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
    const { email, password } = this.miFormulario.value;
    this.authService.login(email, password).subscribe((resp) => {
      if (resp === true) {
        this.router.navigateByUrl('/dashboard');
      }else {
        Swal.fire('Error', resp as string, 'error')
      }
    });
  }
}
