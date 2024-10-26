import { Sequelize } from 'sequelize';
import { DB_DIALECT } from './config/environment';

const dbDialect: any = DB_DIALECT || '';

const db = new Sequelize({
  dialect: dbDialect,
  storage: './database.sqlite',
  logging: false,
});

export default db;