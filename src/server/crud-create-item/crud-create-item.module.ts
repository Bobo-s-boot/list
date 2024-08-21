import { Module } from '@nestjs/common';
import { CrudCreateItemService } from './crud-create-item.service';
import { CrudCreateItemController } from './crud-create-item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrudCreateItem } from './entities/crud-create-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CrudCreateItem])],
  controllers: [CrudCreateItemController],
  providers: [CrudCreateItemService],
  exports: [CrudCreateItemService],
})
export class CrudCreateItemModule {}
