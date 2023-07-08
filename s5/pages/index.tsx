// vendors
import React from 'react';
import Link from 'next/link';

// repositories
import { getAllProducts } from '@/repositories/products';

// types
import { Product } from '@/types/entities/product';

interface HomePageProps {
  products: Product[];
}

function renderProduct(product: Product) {
  return (
    <li key={product.id}>
      <Link href={`/product/${product.id}` as any}>{product.title}</Link>
    </li>
  );
}

export default function HomePage(props: HomePageProps) {
  const { products } = props;

  return <ul>{products.map(renderProduct)}</ul>;
}

export async function getStaticProps() {
  const products = await getAllProducts();

  if (!products.length) return { notFound: true };

  return { props: { products }, revalidate: 10 };
}
