// create an entity with the following fields:
// id: number (primary key, auto-generated)
// name: string (not null, unique)
// color: string (not null)
// tasks: many-to-many relationship with 'Task' entity

import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Task } from '../../task/types/task.entity';

@Entity()
export class Label {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  color: string;

  @ManyToMany(() => Task, (task) => task.labels)
  tasks: Task[];
}
