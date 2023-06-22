export enum TipoPersonal {
    Administrador = "administrador",
    Receptor = "receptor",
    Doctor = "doctor"
}
export enum Genero {
    Femenino = "femenino",
    Masculino = "masculino",
    Otros = "otros"
}
export interface personal {
    id: number;
    centro: number;
    nombre: string;
    apellido: string;
    rut: string;
    edad: number;
    fechaNacimiento: Date;
    genero: Genero;
    telefono: number;
    tipoPersonal: TipoPersonal;
    email: string;
    disponibilidad: boolean;
    especialidad: string;
    username: string;
    password: string;
}
