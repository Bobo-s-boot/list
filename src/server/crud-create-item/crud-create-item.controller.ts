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
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CrudCreateItemService } from './crud-create-item.service';
import { CreateCrudCreateItemDto } from './dto/create-crud-create-item.dto';
import { UpdateCrudCreateItemDto } from './dto/update-crud-create-item.dto';

@Controller('crud-create-item')
export class CrudCreateItemController {
  constructor(private readonly crudCreateItemService: CrudCreateItemService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createCrudCreateItemDto: CreateCrudCreateItemDto) {
    try {
      const createdItem = await this.crudCreateItemService.create(
        createCrudCreateItemDto,
      );
      return { message: 'Item successfully created', data: createdItem };
    } catch (error) {
      return {
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Error creating item',
        error: error.message,
      };
    }
  }
}
