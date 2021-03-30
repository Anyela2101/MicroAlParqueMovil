import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/Interface/Interfaces';
import { RestauranteService } from 'src/app/services/restaurante.service';
import { RestaurantePage } from '../restaurante/restaurante.page';

@Component({
  selector: 'app-consultarestaurante',
  templateUrl: './consultarestaurante.page.html',
  styleUrls: ['./consultarestaurante.page.scss'],
})
export class ConsultarestaurantePage implements OnInit {
  lista: Restaurante[] = [];
  restaurante: Restaurante;
  constructor(public servicio: RestauranteService ) { }

  ngOnInit() {
    this.lista = this.servicio.Restaurantes;  
  }

  eliminar(nit: string){
    this.servicio.EliminarRestaurante(nit);
  }
}
