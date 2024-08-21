import { CrudList } from 'crud-list/entities/crud-list.entity';
import { CrudUpdateItem } from 'crud-update-item/entities/crud-update-item.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class CrudCreateItem {
  @PrimaryGeneratedColumn({ name: 'id_crudCreate' })
  id: number;

  @Column()
  name: string;

  @Column()
  price: string;

  @Column()
  description: string;

  // багато створенних продуктів до одного листa ...
  @ManyToOne(() => CrudList, (list) => list.create, {
    onDelete: 'CASCADE',
  })
  lists: CrudList;

  // одне створення продукта до одного оновленяя продукта ...
  @OneToOne(() => CrudUpdateItem, (updateItem) => updateItem.create)
  updateItem: CrudUpdateItem;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
