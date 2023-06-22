import { Genero, TipoPersonal } from "../entities/personal.model";
import { IsDateString, IsEnum, IsNumber, IsString, IsEmail, IsBoolean } from 'class-validator';


export class CreatePersonalDto {
    
    @IsNumber()
    id: number;
    
    @IsNumber()
    centro_id: number;
    
    @IsString()
    nombre: string;
    
    @IsString()
    apellido: string;
    
    @IsString()
    rut: string;
    
    @IsNumber()
    edad: number;
    
    @IsDateString()
    fechaNacimiento: Date;
    
    @IsEnum(Genero)
    genero: Genero;
    
    @IsNumber()
    telefono: number;
    
    @IsEnum(TipoPersonal)
    tipoPersonal: TipoPersonal;
    
    @IsEmail()
    email: string;
    
    @IsBoolean()
    disponibilidad: boolean;
    
    @IsString()
    especialidad: string;
    
    @IsString()
    username: string;
    
    @IsString()
    password: string;
}
