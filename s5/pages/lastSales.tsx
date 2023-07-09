// vendors
import React, { useEffect, useState } from 'react';

// repositories
import { getSales } from '@/repositories/sales';

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
  const [sales, setSales] = useState<Sale[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  function fetchSales() {
    setIsLoading(true);
    getSales().then((data) => {
      setSales(data);
      setIsLoading(false);
    });
  }

  useEffect(fetchSales, []);

  if (isLoading) return <p>Loading...</p>;

  return <ul>{sales.map(renderSale)}</ul>;
}

export default lastSales;
