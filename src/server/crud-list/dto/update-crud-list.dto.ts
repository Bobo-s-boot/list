import { PartialType } from '@nestjs/mapped-types';
import { CreateCrudListDto } from './create-crud-list.dto';

export class UpdateCrudListDto extends PartialType(CreateCrudListDto) {}
