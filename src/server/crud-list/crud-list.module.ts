import { Module } from '@nestjs/common';
import { CrudListService } from './crud-list.service';
import { CrudListController } from './crud-list.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrudList } from './entities/crud-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CrudList])],
  controllers: [CrudListController],
  providers: [CrudListService],
})
export class CrudListModule {}
