'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { PUPPIES, formatPrice, getPuppyAge, type Puppy } from '@/data/puppies';
import { Search, SlidersHorizontal, Heart, ArrowRight, RefreshCw, MapPin } from 'lucide-react';

const US_STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware',
  'Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky',
  'Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi',
  'Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico',
  'New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania',
  'Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont',
  'Virginia','Washington','West Virginia','Wisconsin','Wyoming',
];

const SIZE_MAP: Record<string, string[]> = {
  tiny: ['teacup-poodle', 'yorkie'],
  small: ['teacup-poodle', 'yorkie', 'french-bulldog'],
  medium: ['french-bulldog', 'goldendoodle'],
  large: ['goldendoodle', 'english-bulldog'],
};

const TIMEFRAME_OPTIONS = [
  { label: 'ASAP', value: 'asap' },
  { label: 'Within 1 month', value: '1month' },
  { label: 'Within 3 months', value: '3months' },
  { label: 'Just browsing', value: 'browsing' },
];

interface FinderFilters {
  breed: string;
  gender: string;
  size: string;
  timeframe: string;
  state: string;
}

const INITIAL_FILTERS: FinderFilters = {
  breed: '',
  gender: '',
  size: '',
  timeframe: '',
  state: '',
};

function filterPuppies(puppies: Puppy[], filters: FinderFilters): Puppy[] {
  return puppies.filter((p) => {
    if (p.status === 'Found My Home') return false;

    if (filters.breed && p.breedSlug !== filters.breed) return false;

    if (filters.gender && p.gender.toLowerCase() !== filters.gender) return false;

    if (filters.size) {
      const allowed = SIZE_MAP[filters.size] ?? [];
      if (!allowed.includes(p.breedSlug)) return false;
    }

    return true;
  });
}

function PuppyResultCard({ puppy }: { puppy: Puppy }) {
  const isAvailable = puppy.status === 'Available';
  const age = getPuppyAge(puppy.dateOfBirth);

  return (
    <article className="bg-white rounded-2xl border border-border overflow-hidden group hover:shadow-md transition-shadow duration-300 flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden">
        <AppImage
          src={puppy.featuredImage}
          alt={puppy.featuredImageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-400 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-display font-600 ${
            isAvailable ? 'bg-green-50 text-green-700' :
            puppy.status === 'Reservation Pending'? 'bg-amber-50 text-amber-700' : 'bg-purple-50 text-purple-700'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${
              isAvailable ? 'bg-green-500' :
              puppy.status === 'Reservation Pending' ? 'bg-amber-500' : 'bg-purple-500'
            }`} />
            {puppy.status}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-display font-600 ${
            puppy.gender === 'Female' ? 'bg-pink-50 text-pink-600' : 'bg-blue-50 text-blue-600'
          }`}>
            {puppy.gender}
          </span>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <div>
            <h3 className="font-display font-700 text-base text-foreground">{puppy.name}</h3>
            <p className="text-sm text-muted-foreground font-500">{puppy.breed}</p>
          </div>
          {isAvailable && (
            <span className="font-display font-700 text-base text-foreground whitespace-nowrap">
              {formatPrice(puppy.price)}
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3 text-xs text-muted-foreground">
          <span>{age}</span>
          <span>·</span>
          <span>{puppy.color}</span>
          {puppy.expectedAdultSize && (
            <>
              <span>·</span>
              <span>Est. {puppy.expectedAdultSize}</span>
            </>
          )}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-2">
          {puppy.shortDescription}
        </p>
        <Link
          href={`/individual-puppy-detail?slug=${puppy.slug}`}
          className={`text-sm py-2.5 w-full inline-flex items-center justify-center gap-2 rounded-xl font-display font-600 transition-colors ${
            isAvailable
              ? 'bg-primary text-primary-foreground hover:bg-primary/90'
              : 'border border-border text-foreground hover:bg-muted/50'
          }`}
        >
          <Heart size={13} />
          Meet {puppy.name}
        </Link>
      </div>
    </article>
  );
}

export default function PuppyFinderSection() {
  const [filters, setFilters] = useState<FinderFilters>(INITIAL_FILTERS);
  const [searched, setSearched] = useState(false);
  const [results, setResults] = useState<Puppy[]>([]);

  const handleSearch = () => {
    const matched = filterPuppies(PUPPIES, filters);
    setResults(matched);
    setSearched(true);
  };

  const handleReset = () => {
    setFilters(INITIAL_FILTERS);
    setSearched(false);
    setResults([]);
  };

  const hasFilters = Object.values(filters).some((v) => v !== '');

  return (
    <section id="puppy-finder" className="py-20 lg:py-28 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-3">Puppy Finder</p>
          <h2 className="section-heading mb-4">Find Your Perfect Match</h2>
          <p className="section-subheading max-w-xl mx-auto">
            Tell us a little about what you&apos;re looking for and we&apos;ll show you puppies that fit your life.
          </p>
        </div>

        {/* Filter Card */}
        <div className="bg-secondary/40 rounded-3xl border border-border p-6 lg:p-8 mb-10 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <SlidersHorizontal size={18} className="text-accent" />
            <span className="font-display font-600 text-foreground">Your Preferences</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {/* Breed */}
            <div>
              <label className="block text-xs font-display font-600 text-muted-foreground uppercase tracking-wide mb-1.5">
                Breed
              </label>
              <select
                value={filters.breed}
                onChange={(e) => setFilters((f) => ({ ...f, breed: e.target.value }))}
                className="w-full px-3 py-2.5 rounded-xl border border-border bg-white text-sm font-display font-500 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
              >
                <option value="">Any breed</option>
                <option value="teacup-poodle">Teacup Poodle</option>
                <option value="yorkie">Yorkie</option>
                <option value="goldendoodle">Goldendoodle</option>
                <option value="french-bulldog">French Bulldog</option>
                <option value="english-bulldog">English Bulldog</option>
              </select>
            </div>

            {/* Gender */}
            <div>
              <label className="block text-xs font-display font-600 text-muted-foreground uppercase tracking-wide mb-1.5">
                Gender
              </label>
              <select
                value={filters.gender}
                onChange={(e) => setFilters((f) => ({ ...f, gender: e.target.value }))}
                className="w-full px-3 py-2.5 rounded-xl border border-border bg-white text-sm font-display font-500 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
              >
                <option value="">Any gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* Size */}
            <div>
              <label className="block text-xs font-display font-600 text-muted-foreground uppercase tracking-wide mb-1.5">
                Adult Size
              </label>
              <select
                value={filters.size}
                onChange={(e) => setFilters((f) => ({ ...f, size: e.target.value }))}
                className="w-full px-3 py-2.5 rounded-xl border border-border bg-white text-sm font-display font-500 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
              >
                <option value="">Any size</option>
                <option value="tiny">Tiny (under 7 lbs)</option>
                <option value="small">Small (under 15 lbs)</option>
                <option value="medium">Medium (15–35 lbs)</option>
                <option value="large">Large (35+ lbs)</option>
              </select>
            </div>

            {/* Timeframe */}
            <div>
              <label className="block text-xs font-display font-600 text-muted-foreground uppercase tracking-wide mb-1.5">
                When are you ready?
              </label>
              <select
                value={filters.timeframe}
                onChange={(e) => setFilters((f) => ({ ...f, timeframe: e.target.value }))}
                className="w-full px-3 py-2.5 rounded-xl border border-border bg-white text-sm font-display font-500 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
              >
                <option value="">Select timeframe</option>
                {TIMEFRAME_OPTIONS.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>

            {/* State */}
            <div className="sm:col-span-2 lg:col-span-2">
              <label className="block text-xs font-display font-600 text-muted-foreground uppercase tracking-wide mb-1.5">
                Your State
              </label>
              <div className="relative">
                <MapPin size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                <select
                  value={filters.state}
                  onChange={(e) => setFilters((f) => ({ ...f, state: e.target.value }))}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-border bg-white text-sm font-display font-500 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                >
                  <option value="">Select your state</option>
                  {US_STATES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleSearch}
              className="btn-accent flex-1 sm:flex-none sm:px-8 justify-center"
            >
              <Search size={16} />
              Find My Puppy
            </button>
            {hasFilters && (
              <button
                onClick={handleReset}
                className="btn-outline flex-1 sm:flex-none sm:px-6 justify-center text-sm"
              >
                <RefreshCw size={14} />
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Results */}
        {searched && (
          <div>
            {results.length > 0 ? (
              <>
                <div className="flex items-center justify-between mb-6">
                  <p className="font-display font-600 text-foreground">
                    {results.length} {results.length === 1 ? 'puppy' : 'puppies'} match your preferences
                  </p>
                  <Link
                    href="/available-puppies"
                    className="text-sm text-accent font-display font-600 hover:underline flex items-center gap-1"
                  >
                    View all <ArrowRight size={13} />
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                  {results.map((puppy) => (
                    <PuppyResultCard key={puppy.id} puppy={puppy} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-14 bg-secondary/30 rounded-2xl border border-border">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart size={24} className="text-accent" />
                </div>
                <h3 className="font-display font-700 text-lg text-foreground mb-2">
                  No exact matches right now
                </h3>
                <p className="text-muted-foreground text-sm max-w-sm mx-auto mb-6">
                  We don&apos;t have a perfect match at the moment, but new litters arrive regularly. Join our waitlist and we&apos;ll reach out when your ideal puppy is available.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button onClick={handleReset} className="btn-outline text-sm px-6 py-2.5">
                    Try Different Filters
                  </button>
                  <Link href="/waitlist" className="btn-accent text-sm px-6 py-2.5">
                    Join the Waitlist
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bottom CTA when not searched */}
        {!searched && (
          <div className="text-center mt-4">
            <p className="text-sm text-muted-foreground">
              Want to browse everything?{' '}
              <Link href="/available-puppies" className="text-accent font-display font-600 hover:underline">
                View all available puppies
              </Link>
              {' '}or{' '}
              <Link href="/puppy-finder" className="text-accent font-display font-600 hover:underline">
                open the full Puppy Finder
              </Link>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
