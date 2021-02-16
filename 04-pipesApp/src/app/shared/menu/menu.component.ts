import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.items = [{
      label: 'File',
      items: [
          { label: 'New', icon: 'pi pi-plus' },
          { label: 'Open', icon: 'pi pi-download' }
        ]
      },
      {
        label: 'Edit',
        items: [
          {label: 'Undo', icon: 'pi pi-refresh'},
          {label: 'Redo', icon: 'pi pi-repeat'}
        ]
      }];
  }

}
