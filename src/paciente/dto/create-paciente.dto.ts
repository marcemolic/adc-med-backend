import { Genero } from '../entities/paciente.model';
import { IsNumber, IsString, IsDateString, IsBoolean, IsEnum } from 'class-validator';
export class CreatePacienteDto {
    
    @IsNumber()
    id: number;
    
    @IsString()
    nombre: string;
    
    @IsString()
    apellido: string;
    
    @IsNumber()
    edad: number;
    
    @IsString()
    rut: string;
    
    @IsDateString()
    fechaNacimiento: Date;
    
    @IsString()
    direccion: string;
    
    @IsString()
    email: string;
    
    @IsNumber()
    telefono: number;
    
    @IsBoolean()
    redSocial: boolean;
    
    @IsNumber()
    prevision_id: number;
    
    @IsEnum(Genero)
    genero: Genero;
}