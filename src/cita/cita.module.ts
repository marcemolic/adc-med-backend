import { Module } from '@nestjs/common';
import { CitaService } from './cita.service';
import { CitaController } from './cita.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cita } from './entities/cita.entity';
import { Personal } from 'src/personal/entities/personal.entity';
import { Centro } from 'src/centro/entities/centro.entity';
import { Paciente } from 'src/paciente/entities/paciente.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Cita,Personal,Centro,Paciente])
  ],
  controllers: [CitaController],
  providers: [CitaService]
})
export class CitaModule {}
