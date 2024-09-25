import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProjectController } from './project/project.controller';
import { ProjectService } from './project/project.service';
import { AuthMiddleware } from './auth.middleware';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [ProjectModule],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(ProjectController);
  }
}
