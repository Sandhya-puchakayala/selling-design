import { Metadata } from 'next';
 import SellerLandingPage from'./SellerLandingPage';

export const metadata: Metadata = {
  title: 'Join Petoty Seller Marketplace - Reach Pet Lovers Nationwide',
  description: 'Start selling pet products on India\'s leading pet marketplace. Join 500+ active sellers, reach 10K+ monthly shoppers, get secure payments, logistics support, and grow your pet business with ease.',
  keywords: 'pet marketplace seller, sell pet products online, pet business, pet store sellers, pet product vendors, India pet market, pet supplies marketplace, seller registration, pet business growth',
  
  openGraph: {
    title: 'Join Petoty Seller Marketplace - Reach Pet Lovers Nationwide',
    description: 'Start selling pet products on India\'s leading pet marketplace. Join 500+ active sellers, reach 10K+ monthly shoppers, get secure payments, logistics support, and grow your pet business with ease.',
  }
}

export default function Page() {
  return <SellerLandingPage />
}