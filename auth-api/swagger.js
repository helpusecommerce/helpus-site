// arquivo: auth-api/swagger.js
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve o diretório atual com suporte a ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'HelpUS - API de Usuários',
      version: '1.0.0',
      description: '📘 Documentação da API para gerenciamento de usuários da plataforma HelpUS',
    },
    servers: [
      {
        url: 'https://helpus-site-production.up.railway.app/api',
        description: 'Servidor de Produção (Railway)',
      },
      {
        url: 'http://localhost:3001/api',
        description: 'Servidor Local para Desenvolvimento',
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: [path.resolve(__dirname, 'routes/*.js')], // Agora o path é direto
};

const specs = swaggerJsdoc(options);

export function setupSwagger(app) {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
}
