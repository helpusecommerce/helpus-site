// auth-api/config/db.js
import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;

const isLocalHost = ['localhost', '127.0.0.1'].includes((process.env.PGHOST || '').toLowerCase());

const pool = new Pool({
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT) || 5432,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,

  // Railway: SSL sempre; local: desliga se for localhost
  ssl: isLocalHost ? false : { rejectUnauthorized: false },

  // estabilidade
  max: Number(process.env.PGPOOL_MAX) || 10,
  idleTimeoutMillis: 30_000,       // fecha conexões ociosas
  connectionTimeoutMillis: 10_000, // tempo p/ conectar
  keepAlive: true,                 // mantém TCP vivo
});

pool.on('error', (err) => {
  console.error('PG pool error:', err); // útil p/ rastrear ECONNRESET
});

export default pool;
