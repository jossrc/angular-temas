import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [],
})
export class AgregarComponent {
  miFormulario: FormGroup = this.formBuilder.group({
    txtNombre: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {}

  tieneError(campo: string): boolean {
    return (
      (this.miFormulario.get(campo)?.invalid &&
        this.miFormulario.get(campo)?.touched) ||
      false
    );
  }

  validClass(campo: string): string {

    let clases:string = "form-control";

    if (this.miFormulario.get(campo)?.touched) {
      if (this.miFormulario.get(campo)?.invalid) {
        clases += ' is-invalid';
      } else {
        clases += ' is-valid';
      }
    }
    return clases;
  }

}
