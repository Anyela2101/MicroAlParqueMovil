import { EmailValidator } from "@angular/forms";

export interface Restaurante{
    nit: string;
    nombres: string;
    nombrepropietario: string;
    direccion: string;
    cantidadpersonal: number;
    telefono: string;
    email: string;
    sedes: number;
    afuncionamiento: number;
    especialidad: string;
}