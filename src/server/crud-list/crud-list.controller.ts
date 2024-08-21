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
import { CrudListService } from './crud-list.service';
import { CreateCrudListDto } from './dto/create-crud-list.dto';
import { UpdateCrudListDto } from './dto/update-crud-list.dto';

@Controller('crud-list')
export class CrudListController {
  constructor(private readonly crudListService: CrudListService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.BAD_REQUEST)
  create(@Body() createCrudListDto: CreateCrudListDto) {
    try {
      const createdList = this.crudListService.create(createCrudListDto);
      return { message: 'List successfuly created', data: createdList };
    } catch (error) {
      return {
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Error creating list',
        error: error.message,
      };
    }
  }

  @Get()
  findAll() {
    return this.crudListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.crudListService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCrudListDto: UpdateCrudListDto,
  ) {
    return this.crudListService.update(+id, updateCrudListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.crudListService.remove(+id);
  }
}
