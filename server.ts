import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  
  const portArgIndex = process.argv.indexOf("--port");
  const portArg = portArgIndex !== -1 ? parseInt(process.argv[portArgIndex + 1], 10) : undefined;
  const PORT = portArg || (process.env.PORT ? parseInt(process.env.PORT, 10) : 3000);

  const hostArgIndex = process.argv.indexOf("--host");
  const hostArg = hostArgIndex !== -1 ? process.argv[hostArgIndex + 1] : undefined;
  const HOST = hostArg || "0.0.0.0";

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // 301 SEO Redirects Middleware
  app.use((req, res, next) => {
    // 1. HTTP -> HTTPS in production (behind reverse proxy)
    const forwardedProto = req.headers['x-forwarded-proto'];
    if (process.env.NODE_ENV === 'production' && forwardedProto === 'http') {
      const host = req.headers.host || 'happyboxlogistics.com';
      const cleanHost = host.replace(/^www\./, '');
      return res.redirect(301, `https://${cleanHost}${req.originalUrl}`);
    }

    // 2. Remove www. prefix
    const host = req.headers.host;
    if (host && host.startsWith('www.')) {
      const proto = forwardedProto || req.protocol || 'https';
      const cleanHost = host.replace(/^www\./, '');
      return res.redirect(301, `${proto}://${cleanHost}${req.originalUrl}`);
    }

    // 3. Remove trailing slashes (e.g. /taobao/ -> /taobao), excluding root '/'
    if (req.path.length > 1 && req.path.endsWith('/')) {
      const query = req.url.slice(req.path.length);
      const cleanPath = req.path.slice(0, -1);
      return res.redirect(301, cleanPath + query);
    }

    next();
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        hmr: false,
        ws: false,
      },
      appType: "spa",
    });
    app.use(vite.middlewares);

    // Fallback to transform index.html for client-side routing
    app.use(async (req, res, next) => {
      if (req.method !== 'GET') return next();
      const url = req.originalUrl;
      try {
        let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e) {
        if (vite) {
          vite.ssrFixStacktrace(e as Error);
        }
        next(e);
      }
    });
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    
    // Serve static files, automatically serving index.html for directories
    app.use(express.static(distPath));
    
    // Fallback for any unmatched routes (SPA fallback)
    app.use((req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
  });
}

startServer();
