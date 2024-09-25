import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('/projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  getAllProjects(): string {
    return this.projectService.findAll();
  }
  @Get(':id')
  getProjectById(): string {
    return this.projectService.findAll();
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
