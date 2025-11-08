import type { VercelRequest, VercelResponse } from '@vercel/node';
import express from 'express';
import { registerRoutes } from '../server/routes';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let initialized = false;

async function initializeApp() {
  if (!initialized) {
    await registerRoutes(app);
    
    const distPath = path.join(process.cwd(), 'dist', 'public');
    app.use(express.static(distPath));
    app.use('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
    
    initialized = true;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  await initializeApp();
  return app(req as any, res as any);
}
