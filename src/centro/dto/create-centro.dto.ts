import { IsEmail, IsNumber, IsString } from "class-validator";


export class CreateCentroDto {
    @IsNumber()
    id: number;

    @IsString()
    nombre: string;
    
    @IsString()
    direccion: string;
    
    @IsNumber()
    telefono: number;
    
    @IsEmail()
    email: string;
    
    @IsString()
    horarioAtencion: string;
}
