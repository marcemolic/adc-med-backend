import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrevisionService } from './prevision.service';
import { CreatePrevisionDto } from './dto/create-prevision.dto';
import { UpdatePrevisionDto } from './dto/update-prevision.dto';

@Controller('prevision')
export class PrevisionController {
  constructor(private readonly previsionService: PrevisionService) {}

  @Post()
  create(@Body() createPrevisionDto: CreatePrevisionDto) {
    return this.previsionService.create(createPrevisionDto);
  }

  @Get()
  findAll() {
    return this.previsionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.previsionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrevisionDto: UpdatePrevisionDto) {
    return this.previsionService.update(+id, updatePrevisionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.previsionService.remove(+id);
  }
}
