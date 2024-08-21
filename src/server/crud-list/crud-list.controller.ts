import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Req,
} from '@nestjs/common';
import { CrudListService } from './crud-list.service';
import { CreateCrudListDto } from './dto/create-crud-list.dto';
import { UpdateCrudListDto } from './dto/update-crud-list.dto';

@Controller('crud-list')
export class CrudListController {
  constructor(private readonly crudListService: CrudListService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createCrudListDto: CreateCrudListDto, @Req() req) {
    return this.crudListService.create(createCrudListDto, +req.product.id);
  }

  @Get()
  findAll(@Req() req) {
    return this.crudListService.findAll(+req.product.id);
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
