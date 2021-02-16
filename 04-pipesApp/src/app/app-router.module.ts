import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BasicComponent} from './sales/pages/basic/basic.component';
import {NumbersComponent} from './sales/pages/numbers/numbers.component';
import {NotCommonsComponent} from './sales/pages/not-commons/not-commons.component';
import {OrderComponent} from './sales/pages/order/order.component';

const routes: Routes = [
  { path: '', component: BasicComponent, pathMatch: 'full' },
  { path: 'numeros', component: NumbersComponent },
  { path: 'no-comunes', component: NotCommonsComponent },
  { path: 'ordenar', component: OrderComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRouterModule { }
