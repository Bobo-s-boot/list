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
  Req,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { CrudUpdateItemService } from './crud-update-item.service';
import { CreateCrudUpdateItemDto } from './dto/create-crud-update-item.dto';
import { UpdateCrudUpdateItemDto } from './dto/update-crud-update-item.dto';

@Controller('crud-update-item')
export class CrudUpdateItemController {
  constructor(private readonly crudUpdateItemService: CrudUpdateItemService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createCrudUpdateItemDto: CreateCrudUpdateItemDto) {
    try {
      const createdUpdateItem = this.crudUpdateItemService.create(
        createCrudUpdateItemDto,
      );
      return { message: 'Item successfuly update', data: createdUpdateItem };
    } catch (error) {
      return {
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Error uptating item',
        error: error.message,
      };
    }
  }

  @Get()
  findAll() {
    return this.crudUpdateItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.crudUpdateItemService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCrudUpdateItemDto: UpdateCrudUpdateItemDto,
  ) {
    return this.crudUpdateItemService.update(+id, updateCrudUpdateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.crudUpdateItemService.remove(+id);
  }
}
