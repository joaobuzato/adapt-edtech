import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { Project } from 'src/project/project.entity';

@Injectable()
export class TaskService {
  constructor(
    @Inject('TASK_REPOSITORY')
    private taskRepository: Repository<Task>,
    @Inject('PROJECT_REPOSITORY')
    private projectRepository: Repository<Project>,
  ) {}

  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }
  async findById(id: string): Promise<Task | null> {
    return this.taskRepository.findOneBy({ id: Number(id) });
  }
  async create(task: Task) {
    const project = await this.projectRepository.findOneBy({
      id: Number(task.projectId),
    });
    if (!project) {
      throw new Error('Project not found');
    }
    task.project = project;
    return this.taskRepository.save(task);
  }
  async update(task: Task) {
    return this.taskRepository.update({ id: task.id }, task);
  }
  async delete(id: string): Promise<void> {
    await this.taskRepository.delete(id);
  }
  async patch(id: string, status: string) {
    const task = await this.taskRepository.findOneBy({ id: Number(id) });
    if (!task) {
      return null;
    }
    task.status = status;
    return this.taskRepository.update({ id: task.id }, task);
  }
}
