import { Module } from '@nestjs/common';
import { PersonalService } from './personal.service';
import { PersonalController } from './personal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personal } from './entities/personal.entity';
import { Centro } from 'src/centro/entities/centro.entity';

@Module({
  imports:[
  TypeOrmModule.forFeature([Personal,Centro])
  ],
  controllers: [PersonalController],
  providers: [PersonalService]
})
export class PersonalModule {}
