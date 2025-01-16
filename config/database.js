// app.js
import pg from 'pg';
const { Pool } = pg;

import 'dotenv/config';

const { PGHOST, PGUSER, PGDATABASE, PGPASSWORD, PGPORT } = process.env;

const db = new Pool({
  user: PGUSER,
  host: 'db',
  database: PGDATABASE,
  password: PGPASSWORD,
  port: PGPORT,
});

export default db;
