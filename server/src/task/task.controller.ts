import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';

@Controller('/tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getAllTasks(): Promise<Task[]> {
    return this.taskService.findAll();
  }
  @Get(':id')
  getTaskById(@Param('id') id: string): Promise<Task | null> {
    return this.taskService.findById(id);
  }
  @Post()
  createTask(@Body() task: Task) {
    return this.taskService.create(task);
  }

  @Put(':id')
  updateTask(@Body() task: Task) {
    return this.taskService.update(task);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
  @Patch(':id')
  patchTask(@Param('id') id: string, @Query('status') status: string) {
    return this.taskService.patch(id, status);
  }
}
