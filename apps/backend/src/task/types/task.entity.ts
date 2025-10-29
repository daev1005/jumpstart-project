// create an entity with the following fields:
// id: number (primary key, auto-generated)
// title: string (not null)
// description: string (nullable)
// dueDate: Date (nullable)
// category: TaskCategory enum (default: 'DRAFT')
// labels: many-to-many relationship with 'Label' entity (a task can have multiple labels, and a label can be associated with multiple tasks)

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { TaskCategory } from './category';
import { Label } from '../../label/types/label.entity';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  dateCreated: Date;

  @Column({ nullable: true })
  dueDate?: Date;

  @ManyToMany(() => Label, (label) => label.tasks, { cascade: true })
  @JoinTable()
  labels: Label[];

  @Column({
    type: 'enum',
    enum: TaskCategory,
    default: TaskCategory.DRAFT,
  })
  category: TaskCategory;
}
