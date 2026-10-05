import { ALL_PRODUCTS } from '@/data/allProducts';
import ProductDetailClient from './ProductDetailClient';

/**
 * Required by Next.js static HTML export (`output: 'export'`)
 */
export function generateStaticParams() {
  return ALL_PRODUCTS.map((prod) => ({
    id: prod.id,
  }));
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  return <ProductDetailClient productId={resolvedParams?.id} />;
}
