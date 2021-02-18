import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styles: [
  ]
})
export class NotCommonsComponent {

  // i18nSelect
  name = 'Susana';
  gender = 'female';

  mapInvitation = {
    male : 'invitarlo',
    female: 'invitarla'
  };

  // i18nPlural
  clients = ['María', 'Pedro', 'Juan', 'Fernando', 'Jose'];

  mapClients = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando'
  };

  // KeyValue Pipe

  people = {
    name: 'Jose',
    age: '22',
    address: 'Lima, Peru'
  };

  // JsonPipe
  heroes = [
    {
      name: ' Superman',
      fly: true
    },
    {
      name: 'Robin',
      fly: false
    },
    {
      name: 'Aquaman',
      fly: false
    }
  ];

  // Async Pipe
  myObservable = interval(3000);

  myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });

  // Tarea
  changeClient(): void {
    if (this.name === 'Susana' ) {
      this.name = 'Juan';
      this.gender = 'male';
    } else {
      this.name = 'Susana';
      this.gender = 'female';
    }
  }

  removeClient(): void {
    if (this.clients.length >= 0) {  this.clients.pop(); }
  }

}
