// server.js — CRA + proxy /api -> auth-api (compatível com Express 5)
const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy: /api/* -> sua API no Railway
app.use(
  '/api',
  createProxyMiddleware({
    target: 'https://helpus-auth-api-production.up.railway.app',
    changeOrigin: true,
    xfwd: true
  })
);

// Serve estático do build (CRA = 'build')
const buildPath = path.join(__dirname, 'build');
app.use(express.static(buildPath));

// Fallback de SPA sem usar "*": qualquer GET que NÃO começa com /api
app.use((req, res, next) => {
  if (req.method !== 'GET') return next();
  if (req.path.startsWith('/api')) return next();
  res.sendFile(path.join(buildPath, 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`helpus-site ouvindo em :${port}`));