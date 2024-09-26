import { Module, DynamicModule } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config();

@Module({})
export class DatabaseModule {
  static forRoot(): DynamicModule {
    const dataSource = new DataSource({
      type: 'mysql',
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      multipleStatements: true,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true, // Cuidado com isso em produção
    });

    return {
      module: DatabaseModule,
      providers: [
        {
          provide: 'DATA_SOURCE',
          useFactory: async () => {
            return dataSource.initialize();
          },
        },
      ],
      exports: ['DATA_SOURCE'],
    };
  }
}
