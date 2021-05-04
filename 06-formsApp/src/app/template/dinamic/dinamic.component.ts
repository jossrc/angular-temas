import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinamic',
  templateUrl: './dinamic.component.html',
  styles: [
  ]
})
export class DinamicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  save(): void {
    console.log('Enviando')
  }

}
