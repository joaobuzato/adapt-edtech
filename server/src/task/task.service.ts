import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @Inject('TASK_REPOSITORY')
    private taskRepository: Repository<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }
  async findById(id: string): Promise<Task | null> {
    return this.taskRepository.findOneBy({ id: Number(id) });
  }
  async create(task: Task): Promise<Task> {
    return this.taskRepository.save(task);
  }
  async update(task: Task): Promise<Task> {
    return this.taskRepository.save(task);
  }
  async delete(id: string): Promise<void> {
    await this.taskRepository.delete(id);
  }
  async patch(id: string, status: string): Promise<Task | null> {
    const task = await this.taskRepository.findOneBy({ id: Number(id) });
    if (!task) {
      return null;
    }
    task.status = status;
    return this.taskRepository.save(task);
  }
}
