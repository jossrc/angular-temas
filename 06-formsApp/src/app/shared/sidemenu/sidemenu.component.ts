import { Component } from '@angular/core';

interface MenuItem {
  text: string;
  route: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
      ul li {
        cursor: pointer;
      }
    `,
  ],
})
export class SidemenuComponent {
  templateMenu: MenuItem[] = [
    { text: 'Básicos', route: './template/basicos' },
    { text: 'Dinámicos', route: './template/dinamicos' },
    { text: 'Switches', route: './template/switches' },
  ];

  reactiveMenu: MenuItem[] = [
    { text: 'Básicos', route: './reactive/basicos' },
    { text: 'Dinámicos', route: './reactive/dinamicos' },
    { text: 'Switches', route: './reactive/switches' },
  ];


}
