// vendors
import useSWR from 'swr';

// types
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

export function useSales() {
  const response = useSWR<Sale[]>(process.env.NEXT_PUBLIC_SALES_API, getSales);

  return response;
}
