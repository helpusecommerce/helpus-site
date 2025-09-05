// node auth-api/test-pg.mjs
import pg from 'pg';

const pool = new pg.Pool({
  host: process.env.PGHOST || 'ballast.proxy.rlwy.net',
  port: Number(process.env.PGPORT || 20521),
  user: process.env.PGUSER || 'postgres',
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE || 'railway',
  // TROQUE ENTRE AS 3 VARIANTES ABAIXO E TESTE:
  // 1) objeto (com SNI)
  ssl: { rejectUnauthorized: false, servername: process.env.PGHOST || 'ballast.proxy.rlwy.net' },
  // 2) true puro
  // ssl: true,
  // 3) objeto simples
  // ssl: { rejectUnauthorized: false },
  connectionTimeoutMillis: 10000,
  idleTimeoutMillis: 30000,
  keepAlive: true,
  keepAliveInitialDelayMillis: 0,
});

try {
  const r = await pool.query('select version()');
  console.log('OK:', r.rows[0].version);
} catch (e) {
  console.error('FAIL:', e);
} finally {
  await pool.end();
}
