import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {

  @Input()
  newCharacter: Character = {
    name: '',
    power: 0,
  };

  constructor(private dbzService: DbzService) { }

  // @Output()
  // onNewCharacter: EventEmitter<Character> = new EventEmitter();

  addNewCharacter = () => {
    if (this.newCharacter.name.trim().length === 0) {
      return;
    }

    // this.onNewCharacter.emit(this.newCharacter)
    this.dbzService.addNewCharacter(this.newCharacter)

    this.newCharacter = {
      name: '',
      power: 0,
    };
  };

}
