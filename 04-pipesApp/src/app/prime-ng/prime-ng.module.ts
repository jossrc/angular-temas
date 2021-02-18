import { NgModule } from '@angular/core';

// PrimeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    ToolbarModule
  ]
})
export class PrimeNgModule { }
