import { IsNumber, IsString } from 'class-validator';

export class CreatePrevisionDto {
    
    @IsNumber()
    id: number;
    
    @IsString()
    nombre: string;
}
