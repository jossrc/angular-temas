import { Component } from '@angular/core';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class ByRegionComponent {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';

  constructor() {}

  getCSSClass = (region: string) =>
    region === this.activeRegion
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';

  activateRegion = (region: string) => {
    this.activeRegion = region;
    // TODO: Hacer el llamado al servicio
  };
}
