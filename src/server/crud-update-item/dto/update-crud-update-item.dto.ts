import { PartialType } from '@nestjs/mapped-types';
import { CreateCrudUpdateItemDto } from './create-crud-update-item.dto';

export class UpdateCrudUpdateItemDto extends PartialType(CreateCrudUpdateItemDto) {}
