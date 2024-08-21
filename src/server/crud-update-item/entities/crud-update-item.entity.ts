import { CrudCreateItem } from 'crud-create-item/entities/crud-create-item.entity';
import { CrudList } from 'crud-list/entities/crud-list.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class CrudUpdateItem {
  @PrimaryGeneratedColumn({ name: 'id_updateCrudItem' })
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  // одне оновлення товару на один створенний продукт
  @OneToOne(() => CrudCreateItem, (createItem) => createItem.updateItem, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'product_id' })
  create: CrudCreateItem;

  // одне оновлення товару на один лист
  @OneToOne(() => CrudList, (list) => list.updateItem)
  @JoinColumn({ name: 'list_id' })
  list: CrudList;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
