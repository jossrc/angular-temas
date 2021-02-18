import { Component } from '@angular/core';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styles: [
  ]
})
export class NotCommonsComponent {

  name = 'Susana';
  gender = 'female';

  mapInvitation = {
    male : 'invitarlo',
    female: 'invitarla'
  };

}
