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
} from '@nestjs/common';
import { CrudUpdateItemService } from './crud-update-item.service';
import { CreateCrudUpdateItemDto } from './dto/create-crud-update-item.dto';
import { UpdateCrudUpdateItemDto } from './dto/update-crud-update-item.dto';

@Controller('crud-update-item')
export class CrudUpdateItemController {
  constructor(private readonly crudUpdateItemService: CrudUpdateItemService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createCrudUpdateItemDto: CreateCrudUpdateItemDto) {
    return this.crudUpdateItemService.create(createCrudUpdateItemDto);
  }

  @Get()
  findAll(@Req() req) {
    return this.crudUpdateItemService.findAll(+req.product.id);
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
