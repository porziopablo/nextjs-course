// vendors
import React from 'react';

// repositories
import { useSales } from '@/repositories/sales';

// types
import { Sale } from '@/types/entities/sale';

function renderSale(sale: Sale) {
  return (
    <li key={sale.id}>
      {sale.username} - $ {sale.volume}
    </li>
  );
}

function lastSales() {
  const { data = [], error, isLoading } = useSales();

  if (error) return <p>Failed to load</p>;

  if (isLoading) return <p>Loading...</p>;

  return <ul>{data.map(renderSale)}</ul>;
}

export default lastSales;
