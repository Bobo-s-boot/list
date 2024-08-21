import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCrudCreateItemDto } from './dto/create-crud-create-item.dto';
import { UpdateCrudCreateItemDto } from './dto/update-crud-create-item.dto';
import { CrudCreateItem } from './entities/crud-create-item.entity';

@Injectable()
export class CrudCreateItemService {
  constructor(
    @InjectRepository(CrudCreateItem)
    private readonly newProductRepository: Repository<CrudCreateItem>,
  ) {}

  async create(createCrudCreateItemDto: CreateCrudCreateItemDto) {
    const productExist = await this.newProductRepository.find({
      where: {
        name: createCrudCreateItemDto.name,
        price: createCrudCreateItemDto.price,
        description: createCrudCreateItemDto.description,
      },
    });

    if (productExist)
      throw new BadRequestException('This product alredy exist!');

    const product = await this.newProductRepository.save({
      name: createCrudCreateItemDto.name,
      price: createCrudCreateItemDto.price,
      description: createCrudCreateItemDto.description,
    });

    return { product };
  }

  async findOne(name: string) {
    return await this.newProductRepository.findOne({
      where: {
        name,
      },
    });
  }
}
