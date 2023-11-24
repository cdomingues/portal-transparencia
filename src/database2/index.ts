/* const { Pool } = require('pg');

const pool = new Pool({
  user: 'transparencia',
  host: '192.168.1.35',
  database: 'transparencia',
  password: 'jjd%67%FDGCX3sdd4d3',
  port: 5432,
});
 */

import knex from "knex";

const database = knex({
  client: "pg",
  connection: {
    host: '192.168.1.35',
    user: 'transparencia',
    password: 'jjd%67%FDGCX3sdd4d3',
    port: Number(5432),
    database: 'transparencia',
  },
  pool: {
    min: 3,
    max: 7,
    acquireTimeoutMillis: 60000,
  },
});

export default database;