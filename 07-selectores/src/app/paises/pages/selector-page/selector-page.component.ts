import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    region: ['', Validators.required],
    pais: ['', Validators.required],
  });

  // Llenar selectores
  regiones: string[] = [];
  paises: Country[] = [];

  constructor( private formBuilder: FormBuilder, private paisesService: PaisesService ) { }

  ngOnInit(): void {
    // Recomendado usar para trabajar con los servicios
    this.regiones = this.paisesService.regiones;

    // Detectar cuando se cambia el valor (region)
    this.miFormulario.get('region')?.valueChanges.subscribe(region => {
      this.paisesService.getPaisesPorRegion(region)
      .subscribe( paises => {
        this.paises = paises;
        console.log(paises);
      })

    })

  }

  guardar() {
    console.log(this.miFormulario.value);
  }

}
