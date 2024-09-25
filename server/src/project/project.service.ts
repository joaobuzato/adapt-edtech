import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Project } from './project.entity';
import { Task } from 'src/task/task.entity';

@Injectable()
export class ProjectService {
  constructor(
    @Inject('PROJECT_REPOSITORY')
    private projectRepository: Repository<Project>,
    @Inject('TASK_REPOSITORY')
    private taskRepository: Repository<Task>,
  ) {}

  async findAll(): Promise<Project[]> {
    return this.projectRepository.find();
  }
  async findById(id: number): Promise<Project | null> {
    return this.projectRepository.findOne({ where: { id } });
  }
  async findTasksById(id: number): Promise<Task[]> {
    const project = await this.findById(id);
    if (!project) {
      return [];
    }
    return this.taskRepository.find({ where: { project } });
  }
  async create(project: Project) {
    return this.projectRepository.insert(project);
  }
  async update(project: Project) {
    return this.projectRepository.update({ id: project.id }, project);
  }
  async delete(id: string): Promise<void> {
    await this.projectRepository.delete(id);
  }
}
