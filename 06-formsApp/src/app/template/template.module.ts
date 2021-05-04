import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateRoutingModule } from './template-routing.module';
import { BasicComponent } from './basic/basic.component';
import { DinamicComponent } from './dinamic/dinamic.component';
import { SwitchesComponent } from './switches/switches.component';

import { CustomMinDirective } from './directives/custom-min.directive';

@NgModule({
  declarations: [
    BasicComponent,
    DinamicComponent,
    SwitchesComponent,
    CustomMinDirective,
  ],
  imports: [CommonModule, TemplateRoutingModule, FormsModule],
})
export class TemplateModule {}
