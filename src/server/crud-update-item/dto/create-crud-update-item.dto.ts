import {
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { CrudCreateItem } from 'crud-create-item/entities/crud-create-item.entity';
import { CrudList } from 'crud-list/entities/crud-list.entity';

export class CreateCrudUpdateItemDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumber()
  price?: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  lists: CrudList;

  @IsNotEmpty()
  product: CrudCreateItem;
}
