// vendors
import React from 'react';
import { GetServerSidePropsContext } from 'nextjs-routes';

// types
import { Product } from '@/types/entities/product';
import { APP_PAGES } from '@/types/internal/pages';

// repositories
import { getProductById } from '@/repositories/products';

interface ProductDetailPageProps {
  product: Product;
}

export default function ProductDetailPage(props: ProductDetailPageProps) {
  const { product } = props;

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
  return {
    paths: [
      { params: { productId: 'p1' } },
      { params: { productId: 'p2' } },
      { params: { productId: 'p3' } },
    ],
    fallback: false,
  };
}
