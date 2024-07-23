import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const port = 3001;

// CORS configuration
const corsOptions = {
  origin: ['http://localhost:3001'], // Specify your allowed origins here
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// File paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dataFilePath = path.join(__dirname, 'data.json');

// Function to read data file
function readDataFile() {
  if (fs.existsSync(dataFilePath)) {
    const fileContent = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(fileContent);
  }
  return [];
}

// Interface for Product
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

// GET all products
app.get('/products', (req: Request, res: Response<Product[]>) => {
  const data = readDataFile();
  res.status(200).json(data);
});

// GET specific product by id
app.get(
  '/products/:id',
  (
    req: Request<{ id: string }>,
    res: Response<Product | { success: boolean; message: string }>,
  ) => {
    const { id } = req.params;
    const data = readDataFile();
    const product = data.find((product: Product) => product.id === id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ success: false, message: 'Product not found' });
    }
  },
);

// POST create new product
app.post(
  '/product-create',
  (
    req: Request<{}, {}, { name: string; price: number; description: string }>,
    res: Response<Product | { success: boolean; message: string }>,
  ) => {
    const { name, price, description } = req.body;

    const isValid =
      typeof name === 'string' &&
      typeof price === 'number' &&
      typeof description === 'string';

    if (isValid) {
      const data = readDataFile();
      const id = Date.now().toString();
      const newProduct: Product = { id, name, price, description };
      data.push(newProduct);
      fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
      res.status(200).json(newProduct);
    } else {
      res.status(400).json({ success: false, message: 'Invalid product data' });
    }
  },
);

// PUT update product by id
app.put(
  '/product-update/:id',
  (
    req: Request<
      { id: string },
      {},
      { name: string; price: number; description: string }
    >,
    res: Response<Product | { success: boolean; message: string }>,
  ) => {
    const { id } = req.params;
    const { name, price, description } = req.body;

    const data = readDataFile();
    const productIndex = data.findIndex(
      (product: Product) => product.id === id,
    );

    if (productIndex === -1) {
      return res
        .status(404)
        .json({ success: false, message: 'Product not found' });
    }

    data[productIndex] = { ...data[productIndex], name, price, description };
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
    res.status(200).json(data[productIndex]);
  },
);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
