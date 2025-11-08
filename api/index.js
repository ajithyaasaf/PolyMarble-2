export default async function handler(req, res) {
  const { app, initializeApp } = await import('../dist/index.js');
  await initializeApp();
  return app(req, res);
}
