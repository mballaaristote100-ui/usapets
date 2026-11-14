import React, { Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PuppyDetailContent from '@/app/individual-puppy-detail/components/PuppyDetailContent';

export const metadata = {
  title: 'Puppy Detail — USA Pets for Home',
  description: 'Learn everything about this puppy — health information, personality, parents, and how to apply to reserve them.',
};

export default function IndividualPuppyDetailPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p className="text-muted-foreground">Loading puppy details...</p></div>}>
          <PuppyDetailContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}