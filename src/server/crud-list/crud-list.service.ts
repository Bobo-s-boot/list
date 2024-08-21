import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCrudListDto } from './dto/create-crud-list.dto';
import { UpdateCrudListDto } from './dto/update-crud-list.dto';
import { CrudList } from './entities/crud-list.entity';

@Injectable()
export class CrudListService {
  constructor(
    @InjectRepository(CrudList)
    private readonly listRepository: Repository<CrudList>,
  ) {}

  async create(createCrudListDto: CreateCrudListDto) {
    const existingList = await this.listRepository.findOne({
      where: {
        name: createCrudListDto.name,
      },
    });

    if (existingList) {
      throw new BadRequestException('List with this name already exists!');
    }

    const newList = this.listRepository.create(createCrudListDto);

    return await this.listRepository.save(newList);
  }

  async findAll() {
    const lists = await this.listRepository.find({
      order: {
        createdAt: 'DESC',
      },
    });

    if (lists.length === 0) throw new NotFoundException('No lists found!');

    return lists;
  }

  async findOne(id: number) {
    const list = await this.listRepository.findOne({
      where: {
        id,
      },
      relations: {
        create: true,
        updateItem: true,
      },
    });

    if (!list) throw new NotFoundException('This list not found!');

    return list;
  }

  async update(id: number, updateCrudListDto: UpdateCrudListDto) {
    const list = await this.listRepository.findOne({
      where: {
        id,
      },
    });

    if (!list) throw new NotFoundException('This list not found!');

    return this.listRepository.update(list, updateCrudListDto);
  }

  async remove(id: number) {
    const list = await this.listRepository.findOne({
      where: {
        id,
      },
    });

    if (!list) throw new NotFoundException('This list not found!');

    return await this.listRepository.delete(id);
  }
}
