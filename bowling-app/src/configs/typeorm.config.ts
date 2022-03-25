import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  // env에서 읽도록 변경 필요
  type: 'postgres',
  host: process.env.DB_CONTAINER_NAME,
  port: 5432,
  username: process.env.DB_USER_ID,
  password: process.env.DB_USER_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
