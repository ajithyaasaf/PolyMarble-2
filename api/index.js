import express from 'express';
import { createServer } from 'http';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let initialized = false;

async function initializeApp() {
  if (!initialized) {
    const httpServer = createServer(app);
    
    const distPath = path.join(__dirname, '..', 'dist', 'public');
    
    app.use(express.static(distPath));
    app.use('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
    
    initialized = true;
  }
}

export default async function handler(req, res) {
  await initializeApp();
  return app(req, res);
}
