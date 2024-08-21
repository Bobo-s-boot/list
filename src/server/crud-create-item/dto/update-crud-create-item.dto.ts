import { PartialType } from '@nestjs/mapped-types';
import { CreateCrudCreateItemDto } from './create-crud-create-item.dto';

export class UpdateCrudCreateItemDto extends PartialType(
  CreateCrudCreateItemDto,
) {}
