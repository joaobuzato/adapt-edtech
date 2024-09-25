import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from './project.entity';

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
  @Post()
  createProject() {
    // @TODO: code to create a teproject
  }

  @Put(':id')
  updateProject() {
    // @TODO: code to create a project
  }

  @Delete(':id')
  deleteProject() {
    // @TODO: code to create a project
  }
  @Patch(':id')
  patchProject() {
    // @TODO: code to create a project
  }
}
