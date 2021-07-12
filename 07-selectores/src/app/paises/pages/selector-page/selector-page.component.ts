import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    region: ['', Validators.required]
  });

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
  }

  guardar() {
    console.log(this.miFormulario.value);
  }

}
