import {
  BadRequestException,
  Injectable,
  NotFoundException,
  NotImplementedException,
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

  async create(createCrudListDto: CreateCrudListDto, id: number) {
    const existingList = await this.listRepository.findOne({
      where: {
        id,
        name: createCrudListDto.name,
      },
    });

    if (existingList) {
      throw new BadRequestException('List with this name already exist!');
    }

    const newList = this.listRepository.create({
      ...createCrudListDto,
      id,
    });

    return await this.listRepository.save(newList);
  }

  async findAll(id: number) {
    const list = await this.listRepository.find({
      where: {
        id,
      },
      order: {
        createdAt: 'DESC',
      },
    });

    if (!list) throw new NotFoundException('This list not found!');

    return list;
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

    return await this.listRepository.update(id, updateCrudListDto);
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
