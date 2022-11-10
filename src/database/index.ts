import knex from "knex";

const database = knex({
  client: "mssql",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    database: process.env.DATABASE,
  },
  pool: {
    min: 3,
    max: 7,
    acquireTimeoutMillis: 60000,
  },
});

export default database;
