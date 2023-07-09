import { Sale } from '@/types/entities/sale';

export async function getSales(): Promise<Sale[]> {
  const response = await fetch(process.env.NEXT_PUBLIC_SALES_API || '');
  const rawData = await response.json();

  const sales: Sale[] = [];

  for (const key in rawData) {
    sales.push({
      id: key,
      username: rawData[key].username,
      volume: rawData[key].volume,
    });
  }

  return sales;
}
