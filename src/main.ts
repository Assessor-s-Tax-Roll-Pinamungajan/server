import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import path_1 = require('path');
import core_1 = require('@nestjs/core');
import app_module_1 = require('./app.module');

import * as express from 'express';

async function bootstrap() {
  const app = await core_1.NestFactory.create(app_module_1.AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  const angularDistPath = (0, path_1.join)(process.cwd(), '../client/dist/client/browser');
  app.use('/assets', express.static((0, path_1.join)(angularDistPath, 'assets')));
  app.use(express.static(angularDistPath));
  const expressApp = app.getHttpAdapter().getInstance();
  // Rewrite legacy frontend calls like /anislag → /api/anislag
  expressApp.use((req, res, next) => {
      const url = req.url || '';
      if (typeof url === 'string' && url.startsWith('/anislag')) {
          req.url = '/api' + url;
      
      }
      next();
  });
  // SPA catch-all, but let API requests pass through
  expressApp.get('*', (req, res, next) => {
      const url = req.url || '';
      if (typeof url === 'string' && url.startsWith('/api')) return next();
      res.sendFile((0, path_1.join)(angularDistPath, 'index.html'));
  });
  await app.listen(5556, '0.0.0.0');
}
bootstrap();
