import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us - Kitchen OS',
  description: 'Get in touch with Kitchen OS. Book a demo, start your free trial, or ask us anything about our kitchen management platform.',
  openGraph: {
    title: 'Contact Us - Kitchen OS',
    description: 'Get in touch with Kitchen OS. Book a demo, start your free trial, or ask us anything about our kitchen management platform.',
    url: '/contact',
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
