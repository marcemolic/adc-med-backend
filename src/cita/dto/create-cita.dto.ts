import { estadoCita, estadoPago, tipoConsulta } from "../entities/cita.model";
import { IsNumber, IsDateString, IsString, Matches, IsEnum } from 'class-validator';

export class CreateCitaDto {
    
    @IsNumber()
    id: number;
    
    @IsNumber()
    personal_id: number;
    
    @IsNumber()
    centro_id: number;
    
    @IsNumber()
    paciente_id: number;
    
    @IsEnum(tipoConsulta)
    tipoConsulta: tipoConsulta;
    
    @IsNumber()
    precio: number;
    
    @IsDateString()
    fecha: Date;
    
    @IsString()
    @Matches(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, {
        message: 'La hora debe estar en formato HH:MM:SS.'
    })
    hora: Date;
    
    @IsEnum(estadoPago)
    estadoPago: estadoPago;
    
    @IsEnum(estadoCita)
    estadoCita: estadoCita;
    
    @IsString()
    observation: string;
}