import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]',
})
export class ErrorMsgDirective implements OnInit {
  private _color: string = '#dc3545';
  private _mensaje: string = 'Este campo es necesario';

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(valor: string) {
    this._color = valor;
    this.setColor();
  }

  @Input() set mensaje(valor: string) {
    this._mensaje = valor;
    this.setMensaje();
  }

  // Determinando el elemento
  constructor(private elementRef: ElementRef<HTMLElement>) {
    this.htmlElement = elementRef;
  }

  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.textContent = this._mensaje;
  }
}
