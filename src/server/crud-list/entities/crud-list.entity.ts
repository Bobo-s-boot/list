import { CrudCreateItem } from 'crud-create-item/entities/crud-create-item.entity';
import { CrudUpdateItem } from 'crud-update-item/entities/crud-update-item.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class CrudList {
  @PrimaryGeneratedColumn({ name: 'id_page' })
  id: number;

  @Column()
  name: string;

  @Column()
  price: string;

  @Column()
  description: string;

  @Column({ default: true })
  isActive: boolean;

  // Один лист до багатьох створенних товарів
  @OneToMany(() => CrudCreateItem, (createItem) => createItem.lists)
  @JoinColumn({ name: 'product_id' })
  create: CrudCreateItem[];

  // Один лист до багатьох оновлених товарів
  @OneToMany(() => CrudUpdateItem, (updateItem) => updateItem.lists)
  updateItem: CrudUpdateItem;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
