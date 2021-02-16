import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicComponent } from './pages/basic/basic.component';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { OrderComponent } from './pages/order/order.component';


@NgModule({
  declarations: [NumbersComponent, NotCommonsComponent, BasicComponent, OrderComponent],
  exports: [NumbersComponent, NotCommonsComponent, BasicComponent, OrderComponent],
  imports: [
    CommonModule
  ]
})
export class SalesModule { }
