import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import os from 'os';
import { initDatabase } from './database.js';
import ordenesRouter from './routes/ordenes.js';
import productosRouter from './routes/productos.js';
import catalogosRouter from './routes/catalogos.js';
import gremioRouter from './routes/gremio.js';
import crmRouter from './routes/crm.js';
import statsRouter from './routes/stats.js';
import configRouter from './routes/config.js';

// Initialize database
initDatabase();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/ordenes', ordenesRouter);
app.use('/api/productos', productosRouter);
app.use('/api/catalogos', catalogosRouter);
app.use('/api/gremio', gremioRouter);
app.use('/api/crm', crmRouter);
app.use('/api/stats', statsRouter);
app.use('/api/config', configRouter);

// Serve built client in production
const clientDist = path.join(process.cwd(), 'client', 'dist');
if (fs.existsSync(clientDist)) {
  app.use(express.static(clientDist));
  app.get('*', (_req, res) => {
    res.sendFile(path.join(clientDist, 'index.html'));
  });
}

app.listen(PORT, '0.0.0.0', () => {
  const nets = Object.values(os.networkInterfaces()).flat().filter((n): n is os.NetworkInterfaceInfo => !!n && n.family === 'IPv4' && !n.internal);
  const localIP = nets[0]?.address || 'localhost';

  console.log('');
  console.log('========================================');
  console.log('  TECNOINFORMATICA - Sistema de Gestión');
  console.log('========================================');
  console.log(`  PC:     http://localhost:${PORT}`);
  console.log(`  Celular: http://${localIP}:${PORT}`);
  console.log('========================================');
  console.log('');
});
