import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CrudCreateItemService } from './crud-create-item.service';
import { CreateCrudCreateItemDto } from './dto/create-crud-create-item.dto';
import { UpdateCrudCreateItemDto } from './dto/update-crud-create-item.dto';

@Controller('crud-create-item')
export class CrudCreateItemController {
  constructor(private readonly crudCreateItemService: CrudCreateItemService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createCrudCreateItemDto: CreateCrudCreateItemDto) {
    return this.crudCreateItemService.create(createCrudCreateItemDto);
  }
}
