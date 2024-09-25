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
import { ProjectService } from './project.service';
import { Project } from './project.entity';
import { Task } from 'src/task/task.entity';

@Controller('/projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  async getAllProjects(): Promise<Project[]> {
    return this.projectService.findAll();
  }
  @Get(':id')
  getProjectById(@Param('id') id: string): Promise<Project | null> {
    return this.projectService.findById(Number(id));
  }
  @Get(':id/tasks')
  getTasksByProjectId(@Param('id') id: string): Promise<Task[]> {
    return this.projectService.findTasksById(Number(id));
  }
  @Post()
  createProject(@Body() project: Project) {
    return this.projectService.create(project);
  }

  @Put(':id')
  updateProject(@Body() project: Project) {
    return this.projectService.update(project);
  }

  @Delete(':id')
  deleteProject(@Param('id') id: string) {
    return this.projectService.delete(id);
  }
}
