import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import pinoHttp from 'pino-http';
import pino from 'pino';
import rateLimit from 'express-rate-limit';
import itemsRouter from './rotas/items.js';
import categoriesRouter from './rotas/categories.js';

const logger = pino({ level: process.env.LOG_LEVEL || 'info' });

export function criarApp() {
  const app = express();

  app.use(helmet());
  app.use(cors());
  app.use(compression());
  app.use(express.json());

  app.use(
    pinoHttp({
      logger,
      genReqId: (req) =>
        req.headers['x-request-id'] || `${Date.now()}-${Math.random()}`,
    })
  );

  const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 60,
    message: { error: 'rate_limit_exceeded' },
    standardHeaders: true,
    legacyHeaders: false,
  });

  app.use('/api', limiter);

  app.use('/api/items', itemsRouter);
  app.use('/api/categories', categoriesRouter);

  app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
  });

  app.use((err, req, res, _next) => {
    req.log.error({ err, requestId: req.id }, 'Erro na requisição');

    if (err.name === 'AbortError' || err.code === 'ETIMEDOUT') {
      return res.status(504).json({
        error: 'timeout',
      });
    }

    if (err.message?.includes('HTTP 404')) {
      return res.status(404).json({
        error: 'Produto não encontrado',
      });
    }

    if (err.statusCode >= 500) {
      return res.status(502).json({
        error: 'upstream_error',
      });
    }

    res.status(502).json({
      error: 'upstream_error',
    });
  });

  return app;
}
