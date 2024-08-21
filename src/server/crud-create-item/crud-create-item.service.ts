import { BadRequestException, Injectable, Param } from '@nestjs/common';
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
    const productExist = await this.newProductRepository.findOne({
      where: {
        name: createCrudCreateItemDto.name,
        description: createCrudCreateItemDto.description,
        price: createCrudCreateItemDto.price,
      },
    });

    if (productExist) {
      throw new BadRequestException('This product already exists!');
    }

    const product = await this.newProductRepository.save(
      createCrudCreateItemDto,
    );

    return { product };
  }

  async findOne(name: string) {
    const product = await this.newProductRepository.findOne({
      where: { name },
    });

    if (!product) throw new BadRequestException('This product not found!');

    return product;
  }
}
