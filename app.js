const express = require('express');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;

// ==============================================================
// LIVE DEMO VERSION CONFIGURATION
// Easily modify this text during the demo to show CI/CD updates!
// Example for Live Demo: Change to "Version 2 - CI/CD WORKED! 🔥"
// ==============================================================
const APP_VERSION = 'Version 1';

// Health Check Endpoint (used by Kubernetes liveness and readiness probes)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

// Main Webpage Route
app.get('/', (req, res) => {
  const hostname = os.hostname();

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DevOps Live Demo</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
    body {
      background-color: #0f172a;
      color: #f8fafc;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }
    .card {
      background: #1e293b;
      border: 1px solid #334155;
      border-radius: 16px;
      padding: 40px;
      max-width: 640px;
      width: 100%;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5);
      text-align: center;
    }
    h1 {
      font-size: 2.25rem;
      font-weight: 800;
      margin-bottom: 12px;
      color: #38bdf8;
    }
    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      color: #4ade80;
      margin-bottom: 24px;
      display: inline-block;
      padding: 8px 20px;
      background: rgba(74, 222, 128, 0.1);
      border: 1px solid rgba(74, 222, 128, 0.3);
      border-radius: 9999px;
    }
    p.subtitle {
      font-size: 1.15rem;
      color: #94a3b8;
      margin-bottom: 28px;
    }
    .pipeline-section {
      background: #0f172a;
      border: 1px solid #334155;
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 28px;
    }
    .pipeline-title {
      font-size: 0.85rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #64748b;
      margin-bottom: 10px;
    }
    .pipeline-flow {
      font-size: 0.95rem;
      font-weight: 600;
      color: #e2e8f0;
      line-height: 1.6;
    }
    .meta-box {
      background: #0b1120;
      border: 1px dashed #475569;
      border-radius: 10px;
      padding: 16px;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 0.95rem;
      color: #cbd5e1;
    }
    .meta-box span.highlight {
      color: #fbbf24;
      font-weight: 700;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>🚀 DevOps Live Demo</h1>
    <h2>${APP_VERSION}</h2>
    <p class="subtitle">Running on Azure Kubernetes Service</p>

    <div class="pipeline-section">
      <div class="pipeline-title">CI/CD Pipeline</div>
      <div class="pipeline-flow">
        GitHub &rarr; GitHub Actions &rarr; Docker &rarr; ACR &rarr; AKS
      </div>
    </div>

    <div class="meta-box">
      Hostname: <span class="highlight">${hostname}</span>
    </div>
  </div>
</body>
</html>
  `;

  res.send(html);
});

// Start server
app.listen(PORT, () => {
  console.log(`DevOps Live Demo app listening on port ${PORT}`);
  console.log(`Hostname: ${os.hostname()}`);
});
