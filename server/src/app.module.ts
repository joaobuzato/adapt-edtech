import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProjectController } from './project/project.controller';
import { ProjectService } from './project/project.service';
import { AuthMiddleware } from './auth.middleware';
import { ProjectModule } from './project/project.module';
import { projectProviders } from './project/project.providers';
import { databaseProviders } from './infra/database.providers';

@Module({
  imports: [ProjectModule],
  controllers: [ProjectController],
  providers: [...projectProviders, ...databaseProviders, ProjectService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes(ProjectController);
  }
}
