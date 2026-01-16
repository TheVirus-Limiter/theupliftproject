import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// -------------------------------------------------------
// Instant redirects: theupliftproject.us/<slug> -> LLS pages
// MUST be before Vite/static/catch-all handlers
// -------------------------------------------------------
const redirectMap: Record<string, string> = {
  schuetze: "https://pages.lls.org/svoy/stx/svoysa26/aschuetze",
  miguel: "https://pages.lls.org/svoy/stx/svoysa26/mroman",
  abraham: "https://pages.lls.org/svoy/stx/svoysa26/asutton",
  hildie: "https://pages.lls.org/svoy/stx/svoysa26/hvillagome",
  landon: "https://pages.lls.org/svoy/stx/svoysa26/lhansen",
  matthew: "https://pages.lls.org/svoy/stx/svoysa26/mbomersbac",
  sierra: "https://pages.lls.org/svoy/stx/svoysa26/srogler",
  ben: "https://pages.lls.org/svoy/stx/svoysa26/bstorandt",
  andrew: "https://pages.lls.org/svoy/stx/svoysa26/aeickstead",
  milly: "https://pages.lls.org/svoy/stx/svoysa26/mcardenas",
  chris: "https://pages.lls.org/svoy/stx/svoysa26/cjohnson",
  keegan: "https://pages.lls.org/svoy/stx/svoysa26/kstinson",
};

// Handles /schuetze, /schuetze/, /SCHUETZE, etc.
// Only redirects known slugs; everything else continues normally.
app.get(/^\/([^\/]+)\/?$/, (req, res, next) => {
  const slug = String(req.params[0] || "").toLowerCase();
  const target = redirectMap[slug];

  if (target) {
    // 302 is recommended during campaign (safe if you ever change destinations)
    return res.redirect(302, target);
    // If you want permanent redirects, use:
    // return res.redirect(301, target);
  }

  next();
});

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true,
    },
    () => {
      log(`serving on port ${port}`);
    },
  );
})();
