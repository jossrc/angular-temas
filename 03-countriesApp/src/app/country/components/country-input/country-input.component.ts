import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent {

  @Output()
  onEnter: EventEmitter<string> = new EventEmitter();

  public word: string = '';

  searchContent = () => {
    this.onEnter.emit(this.word);
  }

}
