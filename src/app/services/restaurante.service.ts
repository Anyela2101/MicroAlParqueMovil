import { Injectable } from '@angular/core';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx'; 
import { of } from 'rxjs';
import { Restaurante } from '../Interface/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {
  private SQLObject: SQLiteObject;
  Restaurantes: Restaurante[]=[];
  constructor(private sqlite: SQLite) {
    this.AbrirBaseDatos();
  }
  
  AbrirBaseDatos(){
    this.sqlite.create({
      name:'Micro.db', location:'default',
    }).then((db:SQLiteObject)=>{
      db.executeSql('CREATE TABLE IF NOT EXISTS Restaurante (nit varchar(15) primary key, nombres varchar(20), nombrepropietario varchar(20), direccion varchar(30), cantidadpersonal int, telefono varchar(15), email varchar(50), sedes int, afuncionamiento int, especialidad varchar(30))', [])
      .then(()=>console.log('transaccion completa'))
      .catch(error=>console.log(error));
      this.SQLObject=db;
     this.ConsultarRestaurante(db);
      
    }).catch(error=>console.log(error));
  }

  RegistrarRestaurantes(Restaurante: Restaurante){
    var Respuesta = this.Restaurantes.find(r=>r.nit==Restaurante.nit);
    if(Respuesta== undefined){
      let Data = [Restaurante.nit, Restaurante.nombres, Restaurante.nombrepropietario, Restaurante.direccion, Restaurante.cantidadpersonal, Restaurante.telefono, Restaurante.email, Restaurante.sedes, Restaurante.afuncionamiento, Restaurante.especialidad];
      this.SQLObject.executeSql('Insert Into Restaurante(nit, nombres, nombrepropietario, direccion, cantidadpersonal, telefono, email, sedes, afuncionamiento, especialidad) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', Data);
      this.ConsultarRestaurante(this.SQLObject);
      return of(Restaurante);
    }else{
      return of(null);
    }
  }

  ConsultarRestaurante(SQLObject: SQLiteObject){
    this.Restaurantes = []; 
    SQLObject.executeSql('Select *from Restaurante',[]).then(r=>{
      if(r.rows.length>0){
        for (let index = 0; index < r.rows.length; index++) {
          this.Restaurantes.unshift(r.rows.item(index));
        }
      }
    })
  }

  EditarRestaurante(Restaurante: Restaurante){
    let Data = [Restaurante.nombres];
    this.SQLObject.executeSql( `Update Restaurante set nombres=? where nit=${Restaurante.nit}`, Data);
    this.ConsultarRestaurante(this.SQLObject);
    return of(Restaurante);
  }

  EliminarRestaurante(nit: string ){
    let Data = [nit];
    this.SQLObject.executeSql("Delete from Restaurante where nit=?", Data);
    this.ConsultarRestaurante(this.SQLObject);
    return of(nit)
  }

}
