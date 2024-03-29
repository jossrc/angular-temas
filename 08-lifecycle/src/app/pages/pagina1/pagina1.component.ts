import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component implements OnInit, OnChanges, DoCheck ,AfterContentInit,
  AfterContentChecked, AfterViewInit,AfterViewChecked, OnDestroy {

    nombre: string = 'Jose'
    segundos: number = 0;
    timerSubscription!: Subscription;

    // Se multiplican los hooks cada vez que se utiliza varias veces el componente
    // en una misma página

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
    this.timerSubscription = interval(1000).subscribe((i) => {
      this.segundos = i
    })
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
    this.timerSubscription.unsubscribe();
    console.log('Timer Limpiado');
  }

  guardar(): void {
    console.log('guardado');
  }

}
