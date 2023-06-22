import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CentroService } from './centro.service';
import { CreateCentroDto } from './dto/create-centro.dto';
import { UpdateCentroDto } from './dto/update-centro.dto';

@Controller('centro')
export class CentroController {
  constructor(private readonly centroService: CentroService) {}

  @Post()
  create(@Body() createCentroDto: CreateCentroDto) {
    return this.centroService.create(createCentroDto);
  }

  @Get()
  findAll() {
    return this.centroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.centroService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCentroDto: UpdateCentroDto) {
    return this.centroService.update(+id, updateCentroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.centroService.remove(+id);
  }
}
