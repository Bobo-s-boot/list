import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCrudUpdateItemDto } from './dto/create-crud-update-item.dto';
import { UpdateCrudUpdateItemDto } from './dto/update-crud-update-item.dto';
import { CrudUpdateItem } from './entities/crud-update-item.entity';

@Injectable()
export class CrudUpdateItemService {
  constructor(
    @InjectRepository(CrudUpdateItem)
    private readonly updateRepository: Repository<CrudUpdateItem>,
  ) {}

  async create(createCrudUpdateItemDto: CreateCrudUpdateItemDto) {
    const existingItem = await this.updateRepository.findOne({
      where: {
        name: createCrudUpdateItemDto.name,
      },
    });

    if (existingItem) {
      throw new BadRequestException('This update has already been played!');
    }

    const newItem = this.updateRepository.create(createCrudUpdateItemDto);
    return await this.updateRepository.save(newItem);
  }

  async findAll() {
    return await this.updateRepository.find({
      order: {
        createdAt: 'DESC',
      },
      relations: {
        create: true,
      },
    });
  }

  async findOne(id: number) {
    const item = await this.updateRepository.findOne({
      where: { id },
    });

    if (!item) throw new NotFoundException('This product not found!');

    return item;
  }

  async update(id: number, updateCrudUpdateItemDto: UpdateCrudUpdateItemDto) {
    const item = await this.updateRepository.findOne({ where: { id } });

    if (!item) {
      throw new NotFoundException('This product not found!');
    }

    return await this.updateRepository.update(id, updateCrudUpdateItemDto);
  }

  async remove(id: number) {
    const item = await this.updateRepository.findOne({ where: { id } });

    if (!item) throw new NotFoundException('This product not found!');

    return await this.updateRepository.delete(id);
  }
}
