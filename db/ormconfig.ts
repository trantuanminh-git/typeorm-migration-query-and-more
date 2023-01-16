import { DataSource, DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1',
  database: 'Fetch_Learn_typeorm_relations_full_details',
  // synchronize: false,
  logging: false,
  entities: ['dist/src/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
  subscribers: [],
};

const configOrm = new DataSource(config);
export default configOrm;
