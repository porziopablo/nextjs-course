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
  return {
    props: {
      products: [{ id: 1, title: 'Product 1' }],
    },
  };
}
