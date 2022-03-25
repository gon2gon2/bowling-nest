import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  // env에서 읽도록 변경 필요
  type: 'postgres',
  // host: 'localhost',
  host: 'postgres',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'test',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
