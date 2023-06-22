export enum Genero {
    Femenino = "femenino",
    Masculino = "masculino",
    Otros = "otros"
}
export interface Paciente {
    id: number;
    nombre: string;
    apellido: string;
    edad: number;
    rut: string;
    fechaNacimiento: Date;
    direccion: string;
    email: string;
    telefono: number;
    redSocial: boolean;
    prevision: number;
    genero: Genero;
}
