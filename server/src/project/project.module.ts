import { Module } from '@nestjs/common';
import { DatabaseModule } from '../infra/database.module';
import { projectProviders } from './project.providers';
import { ProjectService } from './project.service';

@Module({
  imports: [DatabaseModule],
  providers: [...projectProviders, ProjectService],
})
export class ProjectModule {}
