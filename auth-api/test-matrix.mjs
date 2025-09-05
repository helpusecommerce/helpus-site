// node auth-api/test-matrix.mjs
import pg from 'pg';

const base = {
  host: process.env.PGHOST || 'ballast.proxy.rlwy.net',
  port: Number(process.env.PGPORT || 20521),
  user: process.env.PGUSER || 'postgres',
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE || 'railway',
  connectionTimeoutMillis: 10000,
  idleTimeoutMillis: 30000,
  keepAlive: true,
  keepAliveInitialDelayMillis: 0,
};

const variants = [
  { name: 'ssl:true', cfg: { ...base, ssl: true } },
  { name: 'ssl:{rejectUnauthorized:false}', cfg: { ...base, ssl: { rejectUnauthorized: false } } },
  { name: 'ssl:{rejectUnauthorized:false,servername}', cfg: { ...base, ssl: { rejectUnauthorized: false, servername: base.host } } },
];

for (const v of variants) {
  const pool = new pg.Pool(v.cfg);
  try {
    const r = await pool.query('select version()');
    console.log(`[OK] ${v.name}:`, r.rows[0].version);
  } catch (e) {
    console.log(`[FAIL] ${v.name}:`, e.code || e.message);
  } finally {
    await pool.end();
  }
}
