import { PartialType } from '@nestjs/mapped-types';
import { CreatePrevisionDto } from './create-prevision.dto';

export class UpdatePrevisionDto extends PartialType(CreatePrevisionDto) {}
