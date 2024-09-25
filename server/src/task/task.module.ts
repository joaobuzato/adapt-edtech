import { Module } from '@nestjs/common';
import { DatabaseModule } from '../infra/database.module';
import { taskProviders } from './task.providers';
import { TaskService } from './task.service';

@Module({
  imports: [DatabaseModule],
  providers: [...taskProviders, TaskService],
})
export class TaskModule {}
