import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';
import { PaisesService } from '../../services/paises.service';
import { CountrySmall } from '../../interfaces/paises.interface';
@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    region: ['', Validators.required],
    pais: ['', Validators.required],
    frontera: ['', Validators.required]
  });

  // Llenar selectores
  regiones: string[] = [];
  paises: CountrySmall[] = [];
  fronteras = [];

  constructor( private formBuilder: FormBuilder, private paisesService: PaisesService ) { }

  ngOnInit(): void {
    // Recomendado usar para trabajar con los servicios
    this.regiones = this.paisesService.regiones;

    // Detectar cuando se cambia el valor (region)
    this.miFormulario.get('region')?.valueChanges
    .pipe(
      tap( (_) => {
        // Cada vez que el continente cambia, resetea el país
        this.miFormulario.get('pais')?.reset('');
      }),
      switchMap( (region: string) => this.paisesService.getPaisesPorRegion(region) ))
    .subscribe(paises => {
      this.paises = paises
    });

    // Detectar cuando se cambia el país
    this.miFormulario.get('pais')?.valueChanges
    .subscribe( codigoPais => {
      console.log(codigoPais);
    })

  }

  guardar() {
    console.log(this.miFormulario.value);
  }

}
