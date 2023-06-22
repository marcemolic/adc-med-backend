import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCentroDto } from './dto/create-centro.dto';
import { UpdateCentroDto } from './dto/update-centro.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Centro } from './entities/centro.entity';

@Injectable()
export class CentroService {
  constructor(
    @InjectRepository(Centro)
    private centroRepository: Repository<Centro>
  ) {
    
  }
  async create(createCentroDto: CreateCentroDto) {
    //NOTE: funcion ok
    //select * from centro where id = DTO.id
    let foundCentro = await this.centroRepository.findOne({ 
      where: { id: createCentroDto.id } 
    });
    if (foundCentro) {
      throw new HttpException('Centro ya esta registrado', HttpStatus.BAD_REQUEST);
    }
    //insert into centro (id, nombre...) value(dto)
    let centro = await this.centroRepository.create(createCentroDto);
    let result = await this.centroRepository.save(centro);
    return {
      statusCode: HttpStatus.OK,
      message: `centro ${result.nombre} ingresada Correctamente`,
      data: result
    };
  }
  async findAll() {
   //NOTE: funcion OK
   //select * from centro
    let result = await this.centroRepository.find();
    if (!result) {
      throw new HttpException('no hay ningun centro registrado', HttpStatus.NOT_FOUND);
    }
    return {
      statusCode: HttpStatus.FOUND,
      message: 'lista de centros encontrada',
      data: result
    };
  }
  async findOne(id: number) {
    //NOTE: funcion ok
    // select *from centro where id = id
    let result = await this.centroRepository.findOne({ where: { id: id } });
    if (!result) {
      throw new HttpException('no se encuentra el centro', HttpStatus.NOT_FOUND);
    }
    else {
      return {
        statusCode: HttpStatus.FOUND,
        message: `centro ${result.nombre} encontrado`,
        data: result,
      };
    }
  }
  async update(id : number, updateCentroDto:UpdateCentroDto) {
    //NOTE: funcion OK
    let foundCentro = await this.centroRepository.findOne({ where: { id: id } });
    if (!foundCentro) {
      throw new HttpException('Centro de no esta registrado', HttpStatus.NOT_FOUND);
    }
    else {
      let result = await this.centroRepository.update(id, updateCentroDto);
      return {
        statusCode: HttpStatus.OK,
        message: `centro ${foundCentro.nombre}  actualizado`,
        data: result,
      };
    }
  }
  async remove(id: number) {
    // NOTE: funcion ok
    let foundCentro = await this.centroRepository.findOne({ where: { id: id } });
    if (!foundCentro) {
      throw new HttpException('Centro de no esta registrado', HttpStatus.NOT_FOUND);
    }
    else {
      let result = await this.centroRepository.delete(id);
      return {
        statusCode: HttpStatus.OK,
        message: `centro ${foundCentro.nombre} actualizado `,
        data: result,
      };
    }
  }
}
