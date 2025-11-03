/**
 * Order Confirmation Email Template
 *
 * Professional order confirmation email sent to customers after successful payment.
 * Uses React Email components for consistent rendering across email clients.
 */

import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';
import type { Order } from '@/types/order';

interface OrderConfirmationEmailProps {
  order: Order;
}

export default function OrderConfirmationEmail({ order }: OrderConfirmationEmailProps) {
  const {
    orderNumber,
    customer,
    items,
    summary,
    createdAt,
  } = order;

  const orderDate = new Date(createdAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <Html>
      <Head />
      <Preview>Order Confirmation - {orderNumber}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={h1}>Order Confirmation</Heading>
            <Text style={orderNumberText}>Order #{orderNumber}</Text>
          </Section>

          {/* Success Message */}
          <Section style={section}>
            <Text style={text}>
              Hi {customer.firstName},
            </Text>
            <Text style={text}>
              Thank you for your order! We&apos;ve received your payment and are processing your order now.
            </Text>
          </Section>

          {/* Order Details */}
          <Section style={section}>
            <Heading as="h2" style={h2}>Order Details</Heading>
            <Text style={detailText}>
              <strong>Order Date:</strong> {orderDate}
            </Text>
            <Text style={detailText}>
              <strong>Order Number:</strong> {orderNumber}
            </Text>
          </Section>

          {/* Items */}
          <Section style={section}>
            <Heading as="h2" style={h2}>Items Ordered</Heading>
            {items.map((item, index) => (
              <Row key={index} style={itemRow}>
                <Column style={itemColumn}>
                  <Text style={itemText}>
                    <strong>{item.productName}</strong>
                    <br />
                    {item.variantName}
                    {item.pricePerLabel && (
                      <>
                        <br />
                        <span style={itemDetail}>
                          £{item.pricePerLabel.toFixed(2)}/label
                        </span>
                      </>
                    )}
                    {item.pricePerProbe && (
                      <>
                        <br />
                        <span style={itemDetail}>
                          £{item.pricePerProbe.toFixed(2)}/probe
                        </span>
                      </>
                    )}
                  </Text>
                </Column>
                <Column style={quantityColumn}>
                  <Text style={itemText}>Qty: {item.quantity}</Text>
                </Column>
                <Column style={priceColumn}>
                  <Text style={itemText}>
                    £{(item.price * item.quantity).toFixed(2)}
                  </Text>
                </Column>
              </Row>
            ))}
          </Section>

          {/* Order Summary */}
          <Section style={section}>
            <Heading as="h2" style={h2}>Order Summary</Heading>
            <Row style={summaryRow}>
              <Column>
                <Text style={summaryText}>Subtotal:</Text>
              </Column>
              <Column align="right">
                <Text style={summaryText}>£{summary.subtotal.toFixed(2)}</Text>
              </Column>
            </Row>
            <Row style={summaryRow}>
              <Column>
                <Text style={summaryText}>Shipping:</Text>
              </Column>
              <Column align="right">
                <Text style={summaryText}>
                  {summary.shippingCost === 0 ? 'FREE' : `£${summary.shippingCost.toFixed(2)}`}
                </Text>
              </Column>
            </Row>
            <Row style={summaryRow}>
              <Column>
                <Text style={summaryText}>
                  VAT ({(summary.taxRate * 100).toFixed(0)}%):
                </Text>
              </Column>
              <Column align="right">
                <Text style={summaryText}>£{summary.taxAmount.toFixed(2)}</Text>
              </Column>
            </Row>
            <Row style={totalRow}>
              <Column>
                <Text style={totalText}>Total:</Text>
              </Column>
              <Column align="right">
                <Text style={totalText}>£{summary.total.toFixed(2)}</Text>
              </Column>
            </Row>
          </Section>

          {/* Shipping Address */}
          <Section style={section}>
            <Heading as="h2" style={h2}>Shipping Address</Heading>
            <Text style={addressText}>
              {customer.firstName} {customer.lastName}
              {customer.company && (
                <>
                  <br />
                  {customer.company}
                </>
              )}
              <br />
              {customer.addressLine1}
              {customer.addressLine2 && (
                <>
                  <br />
                  {customer.addressLine2}
                </>
              )}
              <br />
              {customer.city}, {customer.postcode}
              <br />
              {customer.country}
            </Text>
          </Section>

          {/* What's Next */}
          <Section style={section}>
            <Heading as="h2" style={h2}>What Happens Next?</Heading>
            <Text style={text}>
              📧 <strong>You&apos;re reading it!</strong> This is your order confirmation.
            </Text>
            <Text style={text}>
              📦 <strong>Processing:</strong> Your order will be dispatched within 1-2 business days.
            </Text>
            <Text style={text}>
              🚚 <strong>Tracking:</strong> You&apos;ll receive shipping confirmation with tracking details once dispatched.
            </Text>
          </Section>

          {/* Support */}
          <Section style={section}>
            <Text style={text}>
              Questions about your order?{' '}
              <Link href="https://www.kitchen-os.com/contact" style={link}>
                Contact our support team
              </Link>
            </Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Kitchen OS - Revolutionizing Commercial Kitchen Operations
              <br />
              <Link href="https://www.kitchen-os.com" style={link}>
                www.kitchen-os.com
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  maxWidth: '600px',
};

const header = {
  padding: '32px 24px',
  backgroundColor: '#16a34a',
  textAlign: 'center' as const,
};

const h1 = {
  color: '#ffffff',
  fontSize: '32px',
  fontWeight: 'bold',
  margin: '0 0 8px',
  padding: '0',
  lineHeight: '1.2',
};

const orderNumberText = {
  color: '#ffffff',
  fontSize: '16px',
  margin: '0',
  opacity: 0.9,
};

const section = {
  padding: '24px 24px 0',
};

const h2 = {
  color: '#1f2937',
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '0 0 16px',
};

const text = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 16px',
};

const detailText = {
  color: '#374151',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '0 0 8px',
};

const itemRow = {
  borderBottom: '1px solid #e5e7eb',
  paddingBottom: '16px',
  marginBottom: '16px',
};

const itemColumn = {
  width: '60%',
  paddingRight: '8px',
};

const quantityColumn = {
  width: '20%',
  paddingRight: '8px',
};

const priceColumn = {
  width: '20%',
  textAlign: 'right' as const,
};

const itemText = {
  color: '#374151',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '0',
};

const itemDetail = {
  color: '#6b7280',
  fontSize: '12px',
};

const summaryRow = {
  marginBottom: '8px',
};

const summaryText = {
  color: '#374151',
  fontSize: '14px',
  margin: '0',
};

const totalRow = {
  borderTop: '2px solid #1f2937',
  paddingTop: '12px',
  marginTop: '12px',
};

const totalText = {
  color: '#1f2937',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0',
};

const addressText = {
  color: '#374151',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '0',
};

const link = {
  color: '#16a34a',
  textDecoration: 'underline',
};

const footer = {
  padding: '24px',
  textAlign: 'center' as const,
  borderTop: '1px solid #e5e7eb',
};

const footerText = {
  color: '#6b7280',
  fontSize: '12px',
  lineHeight: '18px',
  margin: '0',
};
