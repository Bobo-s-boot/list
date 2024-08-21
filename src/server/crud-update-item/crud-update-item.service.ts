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
    const newItem = this.updateRepository.create(createCrudUpdateItemDto);

    if (newItem)
      throw new BadRequestException('This update has already been played!');

    return await this.updateRepository.save(newItem);
  }

  async findAll(id: number) {
    return await this.updateRepository.find({
      where: {
        id,
      },
      relations: {
        create: true,
      },
    });
  }

  async findOne(id: number) {
    const item = await this.updateRepository.findOne({ where: { id } });

    if (!item) throw new NotFoundException('This product not found!');

    return item;
  }

  async update(id: number, updateCrudUpdateItemDto: UpdateCrudUpdateItemDto) {
    const item = await this.updateRepository.findOne({ where: { id } });

    if (!item) {
      throw new NotFoundException('This product not update!');
    } else {
      await this.updateRepository.update(id, UpdateCrudUpdateItemDto);
    }

    return await this.updateRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    const item = await this.updateRepository.findOne({ where: { id } });

    if (!item) throw new NotFoundException('This product not found!');

    return await this.updateRepository.delete(id);
  }
}
