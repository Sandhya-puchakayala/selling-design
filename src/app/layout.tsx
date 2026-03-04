import React from 'react';
import '../styles/index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: {
    default: "Petoty Seller Hub's Leading Pet Marketplace",
    template: "Petoty Seller Hub | %s",
  },
  description:
    "Join Petoty's seller marketplace and grow your pet business nationwide. Access millions of pet owners, secure payments, logistics support, and dedicated seller assistance.",
  keywords:
    "pet marketplace, sell pet products, pet business, online selling, pet store, seller registration, pet supplies marketplace, India pet market",

  openGraph: {
    type: "website",
    title: {
      default: "Petoty Seller Hub's Leading Pet Marketplace",
      template: "Petoty Seller Hub | %s",
    },
    description:
      "Start selling pet products to millions of pet owners across India. Get secure payments, logistics support, and grow your pet business with Petoty marketplace.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}