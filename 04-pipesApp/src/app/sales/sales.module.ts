import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { BasicComponent } from './pages/basic/basic.component';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { OrderComponent } from './pages/order/order.component';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { HeroFliesPipe } from './pipes/heroFlies.pipe';

@NgModule({
  declarations: [
    NumbersComponent,
    NotCommonsComponent,
    BasicComponent,
    OrderComponent,
    MayusculasPipe,
    HeroFliesPipe
  ],
  exports: [
    NumbersComponent,
    NotCommonsComponent,
    BasicComponent,
    OrderComponent,
  ],
  imports: [CommonModule, PrimeNgModule],
})
export class SalesModule {}
