import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreatePrevisionDto } from './dto/create-prevision.dto';
import { UpdatePrevisionDto } from './dto/update-prevision.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Prevision } from './entities/prevision.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PrevisionService {
  constructor(
    @InjectRepository(Prevision)
    private previsionRepository : Repository<Prevision>
  ) { }
  async create(createPrevisionDto:CreatePrevisionDto) {
    // NOTE: Funcion ok
    let previsionFound = await this.previsionRepository.findOne({
      where: { id: createPrevisionDto.id }
    });
    if (previsionFound) {
      throw new HttpException(`La prevision ${createPrevisionDto.nombre} y esta registrado `, HttpStatus.BAD_REQUEST);
    }
    else {
      let prevision = this.previsionRepository.create(createPrevisionDto);
      let result = await this.previsionRepository.save(prevision);
      return {
        statusCode: HttpStatus.OK,
        message: `prevision ${result.nombre} fue ingresada correctamente`,
        data: result
      };
    }
  }
  async findAll() {
    // NOTE: Funcion ok
    let result = await this.previsionRepository.find();
    if (!result) {
      throw new HttpException('No se encuentra ningun registro', HttpStatus.NOT_FOUND);
    }
    return {
      statusCode: HttpStatus.FOUND,
      message: 'lista de previsiones encontradas',
      data: result
    };
  }
  async findOne(id: number) {
    // NOTE: funcion ok
    let result = await this.previsionRepository.findOne({
      where: { id: id },
    });
    if (!result) {
      throw new HttpException('No se encuentra ningun registro', HttpStatus.NOT_FOUND);
    }
    return {
      statusCode: HttpStatus.FOUND,
      message: `la prevision ${result.nombre} encontrada`,
      data: result
    };
  }
  async update(id:number, updatePrevisionDto:UpdatePrevisionDto) {
    // NOTE: funcion ok
    let previsionFound = await this.previsionRepository.findOne({
      where: { id: id }
    });
    if (!previsionFound) {
      throw new HttpException('Prevision no encontrada', HttpStatus.NOT_FOUND);
    }
    let result = await this.previsionRepository.update(id, updatePrevisionDto);
    return {
      statusCode: HttpStatus.OK,
      message: `la prevision ${previsionFound.nombre} Actualizado`,
      data: result
    };
  }
  async remove(id: number) {
    // NOTE: funcion ok 
    let previsionFound = this.previsionRepository.findOne({
      where: { id: id }
    });
    if (!previsionFound) {
      throw new HttpException('Prevision no encontrada', HttpStatus.NOT_FOUND);
    }
    else {
      let result = await this.previsionRepository.delete(id);
      return {
        statusCode: HttpStatus.OK,
        message: 'previsiones Eliminada',
        data: result
      };
    }
  }
}
