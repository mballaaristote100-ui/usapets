import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';

// Lazy-load all below-fold sections
const BreedCardsSection = dynamic(() => import('@/app/components/BreedCardsSection'), { ssr: true });
const AvailablePuppiesSection = dynamic(() => import('@/app/components/AvailablePuppiesSection'), { ssr: true });
const WhyChooseSection = dynamic(() => import('@/app/components/WhyChooseSection'), { ssr: true });
const HowItWorksSection = dynamic(() => import('@/app/components/HowItWorksSection'), { ssr: true });
const FeaturedPuppySection = dynamic(() => import('@/app/components/FeaturedPuppySection'), { ssr: true });
const PuppyFinderSection = dynamic(() => import('@/app/components/PuppyFinderSection'), { ssr: true });
const TestimonialsSection = dynamic(() => import('@/app/components/TestimonialsSection'), { ssr: true });
const DeliverySection = dynamic(() => import('@/app/components/DeliverySection'), { ssr: true });
const FaqSection = dynamic(() => import('@/app/components/FaqSection'), { ssr: true });
const FinalCtaSection = dynamic(() => import('@/app/components/FinalCtaSection'), { ssr: true });

function SectionFallback() {
  return <div className="py-20 lg:py-28" aria-hidden="true" />;
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Suspense fallback={<SectionFallback />}>
          <BreedCardsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <AvailablePuppiesSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <WhyChooseSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <HowItWorksSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FeaturedPuppySection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <PuppyFinderSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <DeliverySection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FaqSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FinalCtaSection />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}