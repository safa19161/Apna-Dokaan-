import express from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'fs/promises';
import path from 'path';

const app = express();
app.use(express.json());
const PORT = 3000;

const DATA_FILE = path.join(process.cwd(), 'products.json');

async function getProducts() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
}

async function saveProducts(products: any[]) {
  await fs.writeFile(DATA_FILE, JSON.stringify(products, null, 2));
}

app.get('/api/products', async (req, res) => {
  const products = await getProducts();
  res.json(products);
});

app.post('/api/products', async (req, res) => {
  const products = await getProducts();
  const newProduct = { id: Date.now().toString(), ...req.body };
  products.push(newProduct);
  await saveProducts(products);
  res.json(newProduct);
});

app.put('/api/products/:id', async (req, res) => {
  const products = await getProducts();
  const index = products.findIndex((p: any) => p.id === req.params.id);
  if (index > -1) {
    products[index] = { ...products[index], ...req.body, id: req.params.id };
    await saveProducts(products);
    res.json(products[index]);
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});

app.delete('/api/products/:id', async (req, res) => {
  let products = await getProducts();
  products = products.filter((p: any) => p.id !== req.params.id);
  await saveProducts(products);
  res.json({ success: true });
});

app.post('/api/admin/login', (req, res) => {
  const { password } = req.body;
  if (password === (process.env.ADMIN_PASSWORD || 'admin123')) {
    res.json({ token: 'fake-jwt-token-123' });
  } else {
    res.status(401).json({ error: 'Invalid password' });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
