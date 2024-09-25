import { Project } from 'src/project/project.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  title: string;

  @Column('text')
  description: string;

  @Column({ length: 10, default: '2096-01-02' })
  expirationDate: string;

  @Column({ length: 20, default: 'Pendente' })
  status: string;

  @ManyToOne(() => Project, (project) => project.tasks)
  project: Project;
}
