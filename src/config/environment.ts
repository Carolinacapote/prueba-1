import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;
const DB_DIALECT = process.env.DB_DIALECT

export {
  PORT,
  DB_DIALECT
};
