import { Task } from 'src/task/task.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  title: string;

  @OneToMany(() => Task, (task) => task.project)
  tasks: Task[];
}
