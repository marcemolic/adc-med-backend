import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CentroModule } from './centro/centro.module';
import { PersonalModule } from './personal/personal.module';
import { PrevisionModule } from './prevision/prevision.module';
import { CitaModule } from './cita/cita.module';
import { PacienteModule } from './paciente/paciente.module';
@Module({
  imports: [
    DatabaseModule,
    CentroModule,
    PersonalModule,
    PrevisionModule,
    CitaModule,
    PacienteModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
