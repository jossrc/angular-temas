import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    region: ['', Validators.required]
  });

  // Llenar selectores
  regiones: string[] = [];

  constructor( private formBuilder: FormBuilder, private paisesService: PaisesService ) { }

  ngOnInit(): void {
    // Recomendado usar para trabajar con los servicios
    this.regiones = this.paisesService.regiones;
  }

  guardar() {
    console.log(this.miFormulario.value);
  }

}
