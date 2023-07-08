// vendors
import React from 'react';
import { GetServerSidePropsContext } from 'nextjs-routes';

// types
import { Product } from '@/types/entities/product';
import { APP_PAGES } from '@/types/internal/pages';

// repositories
import { getAllProducts, getProductById } from '@/repositories/products';

interface ProductDetailPageProps {
  product?: Product;
}

export default function ProductDetailPage(props: ProductDetailPageProps) {
  const { product } = props;

  if (!product) return <p>Loading...</p>;

  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </>
  );
}

type Context = GetServerSidePropsContext<`${APP_PAGES.PRODUCT_DETAIL}`>;

export async function getStaticProps({ params }: Context) {
  const { productId } = params;
  const product = await getProductById(productId);

  if (!product) return { notFound: true };

  return { props: { product } };
}

export async function getStaticPaths() {
  const products = await getAllProducts();

  const paths = products.map((product) => ({
    params: { productId: product.id },
  }));

  return { paths, fallback: true };
}
