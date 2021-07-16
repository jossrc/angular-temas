import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  constructor() {
    console.log('Constructor directive');
  }

  ngOnInit(): void {
    console.log('NgOnInit directiva');
  }


}
