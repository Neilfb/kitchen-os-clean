import { Metadata } from 'next';
import { CheckoutClient } from './CheckoutClient';

export const metadata: Metadata = {
  title: 'Checkout - Kitchen OS Shop',
  description: 'Complete your order with secure payment via Revolut Pay. Fast UK delivery on Kitchen OS products.',
};

export default function CheckoutPage() {
  return <CheckoutClient />;
}
