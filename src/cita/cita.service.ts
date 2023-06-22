import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cita } from './entities/cita.entity';
import { Personal } from 'src/personal/entities/personal.entity';
import { Centro } from 'src/centro/entities/centro.entity';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CitaService {
  constructor(
    @InjectRepository(Cita)
    private citaRepository: Repository<Cita>,
    @InjectRepository(Personal)
    private personalRepository: Repository<Personal>,
    @InjectRepository(Centro)
    private centroRepository: Repository<Centro>,
    @InjectRepository(Paciente)
    private pacienteRepository: Repository<Paciente>
  
    ) {
    
  }
  // TODO: probar apis de cita
  async create(createCitaDto: CreateCitaDto) {
    const citaFound = await this.citaRepository.findOne({
      where: { id: createCitaDto.id },
      relations: ['centro', 'personal', 'paciente']
    });
    if (citaFound) {
      throw new HttpException(`cita ya se encuentra ocupada`, HttpStatus.BAD_REQUEST);
    }
    let personalFound = await this.personalRepository.findOne({
      where: { id: createCitaDto.personal_id }
    });
    let pacienteFound = await this.pacienteRepository.findOne({
      where: { id: createCitaDto.paciente_id }
    });
    let centroFound = await this.centroRepository.findOne({
      where: { id: createCitaDto.centro_id }
    });
    if (!personalFound) {
      throw new HttpException('No se encontró el registro de personal', HttpStatus.NOT_FOUND);
    }
    else if (!pacienteFound) {
      throw new HttpException('No se encontró el registro de paciente', HttpStatus.NOT_FOUND);
    }
    else if (!centroFound) {
      throw new HttpException('No se encontró el registro de centro', HttpStatus.NOT_FOUND);
    }
    else {
      let { paciente_id, centro_id, personal_id , ...restDTO } = createCitaDto
      let newCita = await this.citaRepository.create({
        personal: { id: personal_id }, 
        paciente: { id: paciente_id }, 
        centro:   { id: centro_id }, 
        ...restDTO
      })
        
      let result = await this.citaRepository.save(newCita);
      return {
        statusCode: HttpStatus.OK,
        message: 'Cita registrada Correctamente',
        data: result
      };
    }
  }
  async findAll() {
    let result = await this.citaRepository.find({
      relations: ['centro', 'personal', 'paciente']
    });
    if (!result) {
      throw new HttpException(`no se encuentran lista citas registradas`, HttpStatus.NOT_FOUND);
    }
    return {
      statusCode: HttpStatus.FOUND,
      message: 'Lista de citas encontrada',
      data: result
    };
  }
  async findOne(id) {
    const result = await this.citaRepository.findOne({
      where: { id: id },
      relations: ['centro', 'personal', 'paciente']
    });
    if (!result) {
      throw new HttpException(`no se encuentran la cita `, HttpStatus.NOT_FOUND);
    }
    return {
      statusCode: HttpStatus.FOUND,
      message: 'Cita encontrada',
      data: result
    };
  }
  async update(id: number, updateCitaDto: UpdateCitaDto) {
    const citaFound = await this.citaRepository.findOne({
      where: { id: id },
      relations: ['centro', 'personal', 'paciente']
    });
    if (!citaFound) {
      throw new HttpException('cita no encontrada', HttpStatus.NOT_FOUND);
    }
    let personalFound = await this.personalRepository.findOne({
      where: { id: updateCitaDto.personal_id }
    });
    let pacienteFound = await this.pacienteRepository.findOne({
      where: { id: updateCitaDto.paciente_id }
    });
    let centroFound = await this.centroRepository.findOne({
      where: { id: updateCitaDto.centro_id }
    });
    if (!personalFound) {
      throw new HttpException('No se encontró el registro de personal', HttpStatus.NOT_FOUND);
    }
    else if (!pacienteFound) {
      throw new HttpException('No se encontró el registro de paciente', HttpStatus.NOT_FOUND);
    }
    else if (!centroFound) {
      throw new HttpException('No se encontró el registro de centro', HttpStatus.NOT_FOUND);
    }
    else {
      
      const { paciente_id, centro_id, personal_id, ...restDTO } = updateCitaDto
      let updateCita = {
        personal: { id: personal_id },
        paciente: { id: paciente_id },
        centro: { id: centro_id },
        ...restDTO
      };
      let result = await this.citaRepository.update(id, updateCita);

      return {
        statusCode: HttpStatus.OK,
        message: 'Cita re-agendada/actualizado',
        data: result,
      };
    }
  }
  async remove(id) {
    const citaFound = await this.citaRepository.findOne({
      where: { id: id },
      relations: ['centro', 'personal', 'paciente']
    });
    if (!citaFound) {
      throw new HttpException('cita no encontrada', HttpStatus.NOT_FOUND);
    }
    else {
      let result = await this.citaRepository.delete(id);
      return {
        statusCode: HttpStatus.OK,
        message: 'Cita eliminada y disponible ',
        data: result
      };
    }
  }
}
