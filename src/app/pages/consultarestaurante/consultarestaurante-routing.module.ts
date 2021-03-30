import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarestaurantePage } from './consultarestaurante.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarestaurantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarestaurantePageRoutingModule {}
