import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Paciente } from './entities/paciente.entity';
import { Repository } from 'typeorm';
import { Prevision } from 'src/prevision/entities/prevision.entity';

@Injectable()
export class PacienteService {
  constructor(
    @InjectRepository(Paciente)
    private pacienteRepository: Repository<Paciente>,

    @InjectRepository(Prevision)
    private previsionRepository: Repository<Prevision>
  ) { }
  
  // NOTE: funciones OK
  async create(createPacienteDto: CreatePacienteDto) {    
    let pacienteFound = await this.pacienteRepository.findOne({
      where: {
        id: createPacienteDto.id
      },
      relations: ['prevision']
    });
    let previsionFound = await this.previsionRepository.findOne({
      where:{
        id : createPacienteDto.prevision_id
      }
    })
    if(!previsionFound) {
      throw new HttpException('centro sugerido no encontrado', HttpStatus.BAD_REQUEST);
    }
    if (pacienteFound) {
      throw new HttpException('Paciente ya registrado no encontrado', HttpStatus.BAD_REQUEST);
    }
    else {
      
      let { prevision_id, ...restDTO } = createPacienteDto
      let newPaciente = await this.pacienteRepository.create({
        ...restDTO,
        prevision: { id: prevision_id }
      });
      let result = await this.pacienteRepository.save(newPaciente);
      return {
        statusCode: HttpStatus.OK,
        message: `Paciente ${result.nombre} ${result.apellido} ingresado correctamente `,
        data: result
      };
    }
  }
  async findAll() {
    let result = await this.pacienteRepository.find({
      relations: ['prevision']
    });
    if (!result) {
      throw new HttpException('lista de personal no encontrado', HttpStatus.NOT_FOUND);
    }
    else {
      return {
        statusCode: HttpStatus.FOUND,
        message: 'Lista de pacientes encontrada',
        data: result
      };
    }
  }
  async findOne(id: number) {
    let result = await this.pacienteRepository.findOne({
      where: { id: id },
      relations: ['prevision']
    });
    if (!result) {
      throw new HttpException('Personal no encontrado', HttpStatus.NOT_FOUND);
    }
    else {
      return {
        statusCode: HttpStatus.FOUND,
        message: `paciente ${result.nombre} ${result.apellido} encontrado`,
        data: result,
      };
    }
  }
  async update(id: number, updatePacienteDto: UpdatePacienteDto) {
    let findPaciente = await this.pacienteRepository.findOne({
      where: { id: id },
      relations: ['prevision']
    });
    if (!findPaciente) {
      throw new HttpException('Paciente no encontrado', HttpStatus.NOT_FOUND);
    }
    const { prevision_id, ...restDTO } = updatePacienteDto
    let updatePaciente =  { 
      ...restDTO, 
      prevision: { id: prevision_id } 
    };
    let result = await this.pacienteRepository.update(id, updatePaciente);
    return {
      statusCode: HttpStatus.OK,
      message: `Paciente ${updatePaciente.nombre} ${updatePaciente.apellido} actualizado`,
      data: result
    };
  }
  async remove(id: number) {
    let findPaciente = await this.pacienteRepository.findOne({
      where: { id: id },
      relations: ['prevision']
    });
    if (!findPaciente) {
      throw new HttpException('Paciente no encontrado', HttpStatus.NOT_FOUND);
    }
    else {
      let result = await this.pacienteRepository.delete(id);
      return {
        statusCode: HttpStatus.OK,
        message: `paciente eliminado correctamente `,
        data: result
      };
    }
  }
}
