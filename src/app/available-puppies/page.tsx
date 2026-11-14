import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AvailablePuppiesCatalog from '@/app/available-puppies/components/AvailablePuppiesCatalog';

export const metadata = {
  title: 'Available Puppies — USA Pets for Home',
  description:
    'Browse all available puppies from USA Pets for Home. Filter by breed, gender, and availability. Teacup Poodles, Yorkies, Goldendoodles, French Bulldogs & English Bulldogs.',
};

export default function AvailablePuppiesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <AvailablePuppiesCatalog />
      </main>
      <Footer />
    </>
  );
}