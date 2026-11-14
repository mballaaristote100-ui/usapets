'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { PUPPIES, type Puppy } from '@/data/puppies';
import PuppyGallery from './PuppyGallery';
import PuppyInfoPanel from './PuppyInfoPanel';
import PuppyAboutSection from './PuppyAboutSection';
import PuppyHealthSection from './PuppyHealthSection';
import PuppyParentsSection from './PuppyParentsSection';
import PuppyWhatsIncluded from './PuppyWhatsIncluded';
import PuppyDeliverySection from './PuppyDeliverySection';
import SimilarPuppies from './SimilarPuppies';
import MobileStickyBar from './MobileStickyBar';
import { ArrowLeft } from 'lucide-react';

export default function PuppyDetailContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug') ?? 'bella';
  const puppy: Puppy = PUPPIES.find((p) => p.slug === slug) ?? PUPPIES[0];

  const similarPuppies = PUPPIES.filter(
    (p) => p.breedSlug === puppy.breedSlug && p.id !== puppy.id && p.status === 'Available'
  ).slice(0, 3);

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <Link href="/available-puppies" className="hover:text-accent transition-colors">Available Puppies</Link>
          <span>/</span>
          <span className="text-foreground font-500">{puppy.name}</span>
        </nav>

        {/* Back link */}
        <Link
          href="/available-puppies"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors mb-8 font-500"
        >
          <ArrowLeft size={14} />
          Back to All Puppies
        </Link>

        {/* Main Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 mb-16">
          {/* Left — Gallery */}
          <div>
            <PuppyGallery images={puppy.galleryImages} featuredImage={puppy.featuredImage} featuredAlt={puppy.featuredImageAlt} />
          </div>
          {/* Right — Info Panel */}
          <div>
            <PuppyInfoPanel puppy={puppy} />
          </div>
        </div>

        {/* About Section */}
        <PuppyAboutSection puppy={puppy} />

        {/* Health Section */}
        <PuppyHealthSection puppy={puppy} />

        {/* Parents Section */}
        {(puppy.mother || puppy.father) && (
          <PuppyParentsSection mother={puppy.mother} father={puppy.father} />
        )}

        {/* What's Included */}
        {puppy.whatComesWithPuppy.length > 0 && (
          <PuppyWhatsIncluded puppyName={puppy.name} items={puppy.whatComesWithPuppy} />
        )}

        {/* Delivery */}
        <PuppyDeliverySection puppyName={puppy.name} />

        {/* Similar Puppies */}
        {similarPuppies.length > 0 && (
          <SimilarPuppies puppies={similarPuppies} breedName={puppy.breed} />
        )}
      </div>

      {/* Mobile Sticky CTA Bar */}
      <MobileStickyBar puppy={puppy} />
    </>
  );
}