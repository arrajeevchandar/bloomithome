import type { NextApiRequest, NextApiResponse } from 'next';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Product[]>) {
  res.status(200).json([
    { id: 1, name: 'Product 1', description: 'Great product', price: 50 },
    { id: 2, name: 'Product 2', description: 'Another great product', price: 100 },
  ]);
}
