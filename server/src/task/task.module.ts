import { Module } from '@nestjs/common';
import { DatabaseModule } from '../infra/database.module';
import { taskProviders } from './task.providers';
import { TaskService } from './task.service';
import { projectProviders } from 'src/project/project.providers';

@Module({
  imports: [DatabaseModule.forRoot()],
  providers: [...taskProviders, ...projectProviders, TaskService],
})
export class TaskModule {}
