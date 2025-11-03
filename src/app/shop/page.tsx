import { Metadata } from 'next';
import { ShopClient } from './ShopClient';
import productsData from '@/data/products.json';
import { Product } from '@/data/types';

export const metadata: Metadata = {
  title: 'Shop - Kitchen OS Hardware & Consumables',
  description: 'Purchase thermal labels for your Food Label System and Bluetooth temperature probes for your Food Safe System. Fast UK delivery with Revolut Pay.',
};

export default function ShopPage() {
  return <ShopClient products={productsData as Product[]} />;
}
