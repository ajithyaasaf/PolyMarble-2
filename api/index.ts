import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "../server/routes";
import path from "path";
import fs from "fs";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const initApp = async () => {
  await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
  });

  const distPath = path.join(process.cwd(), "dist", "public");
  
  if (fs.existsSync(distPath)) {
    app.use(express.static(distPath));
    app.use("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  } else {
    app.get("*", (_req, res) => {
      res.status(404).json({ 
        message: "Build not found. Make sure to run 'npm run build' before deploying." 
      });
    });
  }
};

initApp();

export default app;
