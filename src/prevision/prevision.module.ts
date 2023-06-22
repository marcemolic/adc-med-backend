import { Module } from '@nestjs/common';
import { PrevisionService } from './prevision.service';
import { PrevisionController } from './prevision.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prevision } from './entities/prevision.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Prevision])
  ], 
  controllers: [PrevisionController],
  providers: [PrevisionService]
})
export class PrevisionModule {}
