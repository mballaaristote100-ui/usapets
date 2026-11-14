'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PuppyCard from '@/components/PuppyCard';
import { PUPPIES } from '@/data/puppies';
import { ArrowRight } from 'lucide-react';

const FILTER_OPTIONS = [
  { label: 'All', value: 'all' },
  { label: 'Teacup Poodle', value: 'teacup-poodle' },
  { label: 'Yorkie', value: 'yorkie' },
  { label: 'Goldendoodle', value: 'goldendoodle' },
  { label: 'French Bulldog', value: 'french-bulldog' },
  { label: 'English Bulldog', value: 'english-bulldog' },
];

export default function AvailablePuppiesSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const displayPuppies = PUPPIES?.filter((p) => {
    if (activeFilter === 'all') return true;
    return p?.breedSlug === activeFilter;
  })?.slice(0, 6);

  return (
    <section className="py-20 lg:py-28 section-warm">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="section-label mb-3">Available Now</p>
          <h2 className="section-heading mb-4">Meet Our Available Puppies</h2>
          <p className="section-subheading max-w-xl mx-auto">
            Your new companion might be right here. Each puppy is raised with individual care and love.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 overflow-x-auto pb-1">
          {FILTER_OPTIONS?.map((opt) => (
            <button
              key={`filter-${opt?.value}`}
              onClick={() => setActiveFilter(opt?.value)}
              className={`filter-chip ${activeFilter === opt?.value ? 'active' : ''}`}
            >
              {opt?.label}
            </button>
          ))}
        </div>

        {/* Puppy Grid */}
        {displayPuppies?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-10">
            {displayPuppies?.map((puppy) => (
              <PuppyCard key={puppy?.id} puppy={puppy} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-border mb-10">
            <p className="font-display font-600 text-lg text-foreground mb-2">
              No puppies currently match this breed
            </p>
            <p className="text-muted-foreground mb-5 text-sm">
              New litters are planned regularly — join our waitlist to be first to know.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={() => setActiveFilter('all')} className="btn-outline text-sm px-5 py-2.5">
                View All Puppies
              </button>
              <Link href="/waitlist" className="btn-accent text-sm px-5 py-2.5">
                Join the Waitlist
              </Link>
            </div>
          </div>
        )}

        {/* View All CTA */}
        <div className="text-center">
          <Link href="/available-puppies" className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3.5">
            View All Available Puppies
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}