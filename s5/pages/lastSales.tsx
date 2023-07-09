// vendors
import React, { useState, useEffect } from 'react';

// repositories
import { getSales, useSales } from '@/repositories/sales';

// types
import { Sale } from '@/types/entities/sale';

interface LastSalesProps {
  initialSales: Sale[];
}

function renderSale(sale: Sale) {
  return (
    <li key={sale.id}>
      {sale.username} - $ {sale.volume}
    </li>
  );
}

export default function LastSalesPage({ initialSales }: LastSalesProps) {
  const [sales, setSales] = useState(initialSales);
  const { data = [], error } = useSales();

  useEffect(() => {
    if (data.length) setSales(data);
  }, [data]);

  if (error) return <p>Failed to load</p>;

  if (!sales.length) return <p>Loading...</p>;

  return <ul>{sales.map(renderSale)}</ul>;
}

export async function getStaticProps() {
  const initialSales = await getSales();

  return { props: { initialSales }, revalidate: 10 };
}
