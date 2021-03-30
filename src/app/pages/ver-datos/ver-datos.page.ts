import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Restaurante } from 'src/app/Interface/Interfaces';
import { RestauranteService } from 'src/app/services/restaurante.service';

@Component({
  selector: 'app-ver-datos',
  templateUrl: './ver-datos.page.html',
  styleUrls: ['./ver-datos.page.scss'],
})

export class VerDatosPage implements OnInit {
  nit : string = '';
  restaurante: Restaurante;
  constructor(private routerActive: ActivatedRoute, private servicio: RestauranteService,  public toastController: ToastController) { }

  ngOnInit() {
    const nit = this.routerActive.snapshot.params.numero;
    this.restaurante = this.servicio.Restaurantes.find(r=>r.nit==nit);
  }
  getnit(event){
    this.restaurante.nit = event.detail.value;
  }

  getnombre(event){
    this.restaurante.nombres = event.detail.value;
  }

  getcantidadpersonal(event){
    this.restaurante.cantidadpersonal = event.detail.value;
  }
  getafuncionamiento(event){
    this.restaurante.afuncionamiento = event.detail.value;
  }
  getnombrepropietario(event){
    this.restaurante.nombrepropietario = event.detail.value;
  }
  getdireccion(event){
    this.restaurante.direccion= event.detail.value;
  }
  gettelefono(event){
    this.restaurante.telefono = event.detail.value;
  }
  getemail(event){
    this.restaurante.email = event.detail.value;
  }
  getsedes(event){
    this.restaurante.sedes = event.detail.value;
  }
  getespecialidad(event){
    this.restaurante.especialidad = event.detail.value;
  }
  async presentToast(mensaje : string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

  Editar(){
    this.servicio.EditarRestaurante(this.restaurante).subscribe(resultado=>{
      if(resultado!= null){
        this.presentToast('El Restaurante se guardo Correctamente');
      }else{
        this.presentToast('El Restaurante ya se encuentra Registrado');
      }
    });
  }

}
