import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateRoutingModule } from './template-routing.module';
import { BasicComponent } from './basic/basic.component';
import { DinamicComponent } from './dinamic/dinamic.component';
import { SwitchesComponent } from './switches/switches.component';

@NgModule({
  declarations: [BasicComponent, DinamicComponent, SwitchesComponent],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule
  ]
})
export class TemplateModule { }
