import { ProjectService } from './project.service';
export declare class ProjectController {
    private readonly projectService;
    constructor(projectService: ProjectService);
    getAllProjects(): string;
    getProjectById(): string;
    createProject(): void;
    updateProject(): void;
    deleteProject(): void;
    patchProject(): void;
}
