// vendors
import fs from 'fs/promises';
import path from 'path';

// types
import { Product } from '@/types/entities/product';

export async function getAllProducts(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const rawData = await fs.readFile(filePath);
  const data = JSON.parse(rawData.toString());

  return data?.products ?? [];
}

export async function getProductById(id: string): Promise<Product | undefined> {
  const products = await getAllProducts();
  return products.find((product) => product.id === id);
}
