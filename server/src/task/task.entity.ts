import { Project } from 'src/project/project.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  title: string;

  @Column('text')
  description: string;

  @Column('date')
  expirationDate: Date;

  @Column({ length: 20 })
  status: string;

  @ManyToOne(() => Project, (project) => project.tasks)
  project: Project;
}
