import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicComponent } from './basic/basic.component';
import { DinamicComponent } from './dinamic/dinamic.component';
import { SwitchesComponent } from './switches/switches.component';


@NgModule({
  declarations: [BasicComponent, DinamicComponent, SwitchesComponent],
  imports: [
    CommonModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }
