import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { app, initializeApp } = await import('../dist/index.js');
  await initializeApp();
  return app(req, res);
}
