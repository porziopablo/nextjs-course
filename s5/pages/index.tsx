// vendors
import React from 'react';
import fs from 'fs/promises';
import path from 'path';

// types
import { Product } from '@/types/entities/product';

interface HomePageProps {
  products: Product[];
}

function renderProduct(product: Product) {
  return <li key={product.id}>{product.title}</li>;
}

export default function HomePage(props: HomePageProps) {
  const { products } = props;

  return <ul>{products.map(renderProduct)}</ul>;
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const rawData = await fs.readFile(filePath);
  const data = JSON.parse(rawData.toString());

  return {
    props: { products: data.products },
    revalidate: 10, // seconds
  };
}
