import { Module } from '@nestjs/common';
import { CrudUpdateItemService } from './crud-update-item.service';
import { CrudUpdateItemController } from './crud-update-item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrudUpdateItem } from './entities/crud-update-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CrudUpdateItem])],
  controllers: [CrudUpdateItemController],
  providers: [CrudUpdateItemService],
})
export class CrudUpdateItemModule {}
