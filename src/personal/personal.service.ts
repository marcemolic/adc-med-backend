import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreatePersonalDto } from './dto/create-personal.dto';
import { UpdatePersonalDto } from './dto/update-personal.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Personal } from './entities/personal.entity';
import { Repository } from 'typeorm';
import { Centro } from 'src/centro/entities/centro.entity';
import { CreateCentroDto } from '../centro/dto/create-centro.dto';

@Injectable()
export class PersonalService {
  constructor(
    @InjectRepository(Personal)
    private personalRepository: Repository<Personal>,

    @InjectRepository(Centro)
    private centroRepository: Repository<Centro>
  ) {

  }
  // NOTE: All funcion ok
  async create(createPersonalDto: CreatePersonalDto) {
    let personalFound = await this.personalRepository.findOne({
      relations: ['centro'],
      where: { id: createPersonalDto.id },
    });
    let centroFound = await this.centroRepository.findOne({
      where: {
        id: createPersonalDto.centro_id
      }
    });
    if (personalFound) {
      throw new HttpException(`El personal ${createPersonalDto.nombre} ${createPersonalDto.apellido} ya se encontró en su registro`, HttpStatus.NOT_FOUND);
    }
    else if (!centroFound) {
      throw new HttpException(`El centro se encuentra registrado`, HttpStatus.NOT_FOUND);
    }
    let { centro_id, ...restDto } = createPersonalDto;
    let newPersonal = this.personalRepository.create({
      ...restDto,
      centro: { id: createPersonalDto.centro_id },
    });
    let result = await this.personalRepository.save(newPersonal);
    return {
      statusCode: HttpStatus.OK,
      message: `${result.nombre} ${result.apellido} se registro correctamente`,
      data: result
    };
  }
  async findAll() {
    let result = await this.personalRepository.find({
      relations: ['centro']
    });
    if (!result) {
      throw new HttpException('no se encuentra ningun registro', HttpStatus.NOT_FOUND);
    }
    else {
      return {
        statusCode: HttpStatus.OK,
        message: 'lista de personal encontrada',
        data: result
      };
    }
  }
  async findOne(id) {
    let result = await this.personalRepository.findOne({
      relations: ['centro'],
      where: { id: id },
    });
    if (!result) {
      throw new HttpException('personal no encontrado', HttpStatus.NOT_FOUND);
    }
    else {
      return {
        statusCode: HttpStatus.FOUND,
        message: `${result.nombre} ${result.apellido} encontrado`,
        data: result
      };
    }
  }
  async update(id: number, updatePersonalDto: UpdatePersonalDto) {
    let foundPersonal = await this.personalRepository.findOne({
      where: { id: id },
      relations: ['centro'],
    });
    if (!foundPersonal) {
      throw new HttpException('Personal no encontrado', HttpStatus.NOT_FOUND);
    }
    let centroFound = await this.centroRepository.findOne({
      where: { id: updatePersonalDto.centro_id }
    });
    if (!centroFound) {
      throw new HttpException('Centro no encontrado', HttpStatus.NOT_FOUND);
    }
    else {
      const { centro_id, ...restDTO } = updatePersonalDto;
      let updatePersonal = {
        ...restDTO,
        centro: { id: centro_id }
      }
      let result = await this.personalRepository.update(id, updatePersonal);
      return {
        statusCode: HttpStatus.OK,
        message: `El personal ${updatePersonal.nombre} ${updatePersonal.apellido} se a actualizado`,
        data: result,
      };
    }
  }
  async remove(id: number) {
    let foundPersonal = await this.personalRepository.findOne({
      where: { id: id },
      relations: ['centro'],
    });
    if (!foundPersonal) {
      throw new HttpException('Personal no encontrado', HttpStatus.NOT_FOUND);
    }
    else {
      let result = await this.personalRepository.delete(id);
      return {
        statusCode: HttpStatus.OK,
        message: 'personal eliminado ',
        data: result
      };
    }
  }
}
