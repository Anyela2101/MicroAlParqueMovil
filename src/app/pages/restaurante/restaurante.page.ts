import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Restaurante } from 'src/app/Interface/Interfaces';
import { RestauranteService } from 'src/app/services/restaurante.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.page.html',
  styleUrls: ['./restaurante.page.scss'],
})
export class RestaurantePage implements OnInit {
  restaurante: Restaurante;
  constructor(public actionSheetController: ActionSheetController, public service: RestauranteService, public toastController: ToastController) { }

  ngOnInit() {
    this.restaurante={ 
      nit: '',
      nombres:'',
      nombrepropietario:'',
      direccion: '',
      cantidadpersonal: 0,
      telefono: '',
      email:'',
      sedes:0,
      afuncionamiento:0,
      especialidad:''


    }
  }

  async presentActionSheet(event) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  getNit(event){
    this.restaurante.nit = event.detail.value;
  }

  getNombre(event){
    this.restaurante.nombres = event.detail.value;
  }
  getNombrePropietario(event){
    this.restaurante.nombrepropietario = event.detail.value;
  }

  getDireccion(event){
    this.restaurante.direccion = event.detail.value;
  }
  getCantidadPersonal(event){
    this.restaurante.cantidadpersonal = event.detail.value;
  }
  getTelefono(event){
    this.restaurante.telefono = event.detail.value;
  }
  getEmail(event){
    this.restaurante.email = event.detail.value;
  }
  getSedes(event){
    this.restaurante.sedes = event.detail.value;
  }
  getAFuncionamiento(event){
    this.restaurante.afuncionamiento = event.detail.value;
  }
  getEspecialidad(event){
    this.restaurante.especialidad = event.detail.value;
  }

  async presentToast(mensaje : string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

  Guardar(){
    this.service.RegistrarRestaurantes(this.restaurante).subscribe(resultado=>{
      if(resultado!= null){
        this.presentToast('El Restaurante se guardo Correctamente');
      }else{
        this.presentToast('El Restaurante ya se encuentra Registrado');
      }
    });
    console.log(this.restaurante);

  }
}
