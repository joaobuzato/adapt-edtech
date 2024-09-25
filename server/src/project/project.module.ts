import { Module } from '@nestjs/common';
import { DatabaseModule } from '../infra/database.module';
import { projectProviders } from './project.providers';
import { ProjectService } from './project.service';
import { taskProviders } from 'src/task/task.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...projectProviders, ...taskProviders, ProjectService],
})
export class ProjectModule {}
