// 📄 auth-api/config/db.js
import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;

function parseHostFromUrl(url) {
  try { return new URL(url).hostname; } catch { return undefined; }
}
function isTrue(v) {
  const s = String(v ?? '').trim().toLowerCase();
  return ['true','1','on','yes','require'].includes(s);
}
function isFalse(v) {
  const s = String(v ?? '').trim().toLowerCase();
  return ['false','0','off','no'].includes(s);
}

// Decide SSL com base no host/ambiente, com override por PGSSL
function decideSSL(hostname) {
  // Overrides explícitos
  if (isTrue(process.env.PGSSL))  return { rejectUnauthorized: false, servername: hostname || process.env.PGHOST };
  if (isFalse(process.env.PGSSL)) return false;

  const host = (hostname || process.env.PGHOST || '').toLowerCase();
  const runningInRailway = !!(process.env.RAILWAY_ENVIRONMENT || process.env.RAILWAY_PROJECT_ID);

  // Dentro do Railway usando a rede interna → sem SSL
  if (host.includes('postgres.railway.internal')) return false;
  if (runningInRailway && (!host || host.includes('postgres.railway.internal'))) return false;

  // Fora do Railway (proxy público) → SSL com SNI
  if (host) return { rejectUnauthorized: false, servername: host };

  // Fallback conservador
  return false;
}

const usingUrl = !!process.env.DATABASE_URL;
const hostname = usingUrl
  ? parseHostFromUrl(process.env.DATABASE_URL)
  : (process.env.PGHOST || 'localhost');

const ssl = decideSSL(hostname);

const baseConfig = usingUrl
  ? { connectionString: process.env.DATABASE_URL }
  : {
      host: process.env.PGHOST || 'localhost',
      port: Number(process.env.PGPORT || 5432),
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE,
    };

const pool = new Pool({
  ...baseConfig,
  ssl,
  max: Number(process.env.PGPOOL_MAX || 10),
  idleTimeoutMillis: Number(process.env.PG_IDLE || 30_000),
  connectionTimeoutMillis: Number(process.env.PG_CONNECT_TIMEOUT || 10_000),
  keepAlive: true,
  keepAliveInitialDelayMillis: 0,
});

console.log(`🗄️ PG host=${hostname || '(desconhecido)'} | SSL=${ssl ? 'on' : 'off'}`);

pool.on('error', (err) => {
  console.error('⚠️ PG pool error:', err);
});

// 🔎 Testa logo ao iniciar
(async () => {
  try {
    const r = await pool.query('SELECT version()');
    console.log('✅ Conexão Postgres OK:', r.rows[0].version);
  } catch (e) {
    console.error('❌ Falha ao conectar Postgres:', e);
  }
})();

export default pool;
