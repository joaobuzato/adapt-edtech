import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProjectController } from './project/project.controller';
import { ProjectService } from './project/project.service';
import { ProjectModule } from './project/project.module';
import { projectProviders } from './project/project.providers';
import { databaseProviders } from './infra/database.providers';
import { TaskController } from './task/task.controller';
import { taskProviders } from './task/task.providers';
import { TaskService } from './task/task.service';
import { TaskModule } from './task/task.module';
import { UserController } from './user/user.controller';

@Module({
  imports: [ProjectModule, TaskModule],
  controllers: [ProjectController, TaskController, UserController],
  providers: [
    ...projectProviders,
    ...taskProviders,
    ...databaseProviders,
    ProjectService,
    TaskService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes(ProjectController);
    consumer.apply().forRoutes(TaskController);
  }
}
