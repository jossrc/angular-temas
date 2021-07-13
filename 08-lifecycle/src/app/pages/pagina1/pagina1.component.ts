import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component implements OnInit, OnChanges, DoCheck ,AfterContentInit,
  AfterContentChecked, AfterViewInit,AfterViewChecked, OnDestroy {

  /*
    En el constructor hacemos inyección de dependencias que el
    componente necesita o si necesitamos una inicialización
    antes que el html sea construido
  */
  constructor() {
    console.log('constructor()');
  }

  /*
    Es un hook, se utiliza cuando un componente está inicializado,
    cuando se crea o cambia la información del padre como traer peticiones Http.
    Traer información de servicios
  */
  ngOnInit(): void {
    console.log('ngOnInit()');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges()');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck()');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit()');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked()');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit()');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked()');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy()');
  }
}
