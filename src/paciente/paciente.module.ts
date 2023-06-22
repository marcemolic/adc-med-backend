import { Module } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteController } from './paciente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from './entities/paciente.entity';
import { Prevision } from 'src/prevision/entities/prevision.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Paciente,Prevision])
  ],
  controllers: [PacienteController],
  providers: [PacienteService]
})
export class PacienteModule {}
