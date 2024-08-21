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

  @Column('decimal')
  price: number;

  @Column()
  description: string;

  @ManyToOne(() => CrudList, (list) => list.create, {
    onDelete: 'CASCADE',
  })
  list: CrudList;

  @OneToOne(() => CrudUpdateItem, (updateItem) => updateItem.create)
  updateItem: CrudUpdateItem;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
