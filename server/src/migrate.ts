import migrate from 'quick-migrate-lib';

const connectionParams = {
  host: process.env.DB_HOST ?? '',
  port: Number(process.env.DB_PORT ?? 3306),
  user: process.env.DB_USERNAME ?? '',
  password: process.env.DB_PASSWORD ?? '',
  multipleStatements: true,
};

const sqlFile = './src/infra/create_database.sql';

migrate(sqlFile, connectionParams);
