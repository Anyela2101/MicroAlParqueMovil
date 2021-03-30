import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarestaurantePageRoutingModule } from './consultarestaurante-routing.module';

import { ConsultarestaurantePage } from './consultarestaurante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarestaurantePageRoutingModule
  ],
  declarations: [ConsultarestaurantePage]
})
export class ConsultarestaurantePageModule {}
