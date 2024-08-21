import { Module } from '@nestjs/common';
import { CrudCreateItemService } from './crud-create-item.service';
import { CrudCreateItemController } from './crud-create-item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrudCreateItem } from './entities/crud-create-item.entity';
import { CrudUpdateItem } from 'crud-update-item/entities/crud-update-item.entity';
import { CrudList } from 'crud-list/entities/crud-list.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CrudCreateItem, CrudList, CrudUpdateItem]),
  ],
  controllers: [CrudCreateItemController],
  providers: [CrudCreateItemService],
  exports: [CrudCreateItemService],
})
export class CrudCreateItemModule {}
