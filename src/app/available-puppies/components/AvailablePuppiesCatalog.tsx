'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import PuppyCard from '@/components/PuppyCard';
import { PUPPIES, type PuppyStatus, type BreedSlug } from '@/data/puppies';
import { Search, SlidersHorizontal, X, ChevronDown, Heart } from 'lucide-react';


type SortOption = 'newest' | 'age-asc' | 'breed' | 'price-asc' | 'price-desc';

const BREED_FILTERS: { label: string; value: BreedSlug | 'all' }[] = [
  { label: 'All Breeds', value: 'all' },
  { label: 'Teacup Poodle', value: 'teacup-poodle' },
  { label: 'Yorkie', value: 'yorkie' },
  { label: 'Goldendoodle', value: 'goldendoodle' },
  { label: 'French Bulldog', value: 'french-bulldog' },
  { label: 'English Bulldog', value: 'english-bulldog' },
];

const GENDER_FILTERS = [
  { label: 'Any Gender', value: 'all' },
  { label: 'Female', value: 'Female' },
  { label: 'Male', value: 'Male' },
];

const STATUS_FILTERS: { label: string; value: PuppyStatus | 'all' }[] = [
  { label: 'All Statuses', value: 'all' },
  { label: 'Available', value: 'Available' },
  { label: 'Reservation Pending', value: 'Reservation Pending' },
  { label: 'Reserved', value: 'Reserved' },
  { label: 'Found My Home', value: 'Found My Home' },
];

const SORT_OPTIONS: { label: string; value: SortOption }[] = [
  { label: 'Newest First', value: 'newest' },
  { label: 'Youngest First', value: 'age-asc' },
  { label: 'By Breed', value: 'breed' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
];

export default function AvailablePuppiesCatalog() {
  const [search, setSearch] = useState('');
  const [breedFilter, setBreedFilter] = useState<BreedSlug | 'all'>('all');
  const [genderFilter, setGenderFilter] = useState<'all' | 'Female' | 'Male'>('all');
  const [statusFilter, setStatusFilter] = useState<PuppyStatus | 'all'>('all');
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...PUPPIES];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.breed.toLowerCase().includes(q) ||
          p.color.toLowerCase().includes(q)
      );
    }

    if (breedFilter !== 'all') {
      result = result.filter((p) => p.breedSlug === breedFilter);
    }

    if (genderFilter !== 'all') {
      result = result.filter((p) => p.gender === genderFilter);
    }

    if (statusFilter !== 'all') {
      result = result.filter((p) => p.status === statusFilter);
    }

    result.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.dateOfBirth).getTime() - new Date(a.dateOfBirth).getTime();
        case 'age-asc':
          return new Date(a.dateOfBirth).getTime() - new Date(b.dateOfBirth).getTime();
        case 'breed':
          return a.breed.localeCompare(b.breed);
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        default:
          return 0;
      }
    });

    return result;
  }, [search, breedFilter, genderFilter, statusFilter, sortBy]);

  const activeFilterCount = [
    breedFilter !== 'all',
    genderFilter !== 'all',
    statusFilter !== 'all',
  ].filter(Boolean).length;

  const clearAllFilters = () => {
    setBreedFilter('all');
    setGenderFilter('all');
    setStatusFilter('all');
    setSearch('');
  };

  return (
    <>
      {/* Page Header */}
      <div className="bg-white border-b border-border py-10 lg:py-14">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground font-500">Available Puppies</span>
          </nav>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="section-label mb-2">Browse All</p>
              <h1 className="font-display font-800 text-4xl lg:text-5xl text-foreground leading-tight">
                Available Puppies
              </h1>
              <p className="text-muted-foreground mt-3 text-base max-w-lg">
                Every puppy here has been raised with individual care and is ready to find their forever family.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="bg-secondary rounded-xl px-5 py-3 text-center border border-border">
                <p className="font-display font-800 text-3xl text-foreground">
                  {filtered.filter((p) => p.status === 'Available').length}
                </p>
                <p className="text-xs text-muted-foreground font-500 mt-0.5">Available Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border-b border-border sticky top-16 z-30 shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-3 flex-wrap">
            {/* Search */}
            <div className="relative flex-1 min-w-[180px] max-w-xs">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by name or breed..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-9 pl-9 pr-3 py-0 text-sm border border-input rounded-lg bg-white text-foreground placeholder:text-muted-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-colors"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label="Clear search"
                >
                  <X size={13} />
                </button>
              )}
            </div>

            {/* Desktop Filter Selects */}
            <div className="hidden md:flex items-center gap-2 flex-wrap">
              {/* Breed */}
              <div className="relative">
                <select
                  value={breedFilter}
                  onChange={(e) => setBreedFilter(e.target.value as BreedSlug | 'all')}
                  className="h-9 appearance-none border border-input rounded-lg bg-white text-sm text-foreground pl-3 pr-8 py-0 min-w-[140px] outline-none focus:border-accent cursor-pointer"
                  aria-label="Filter by breed"
                >
                  {BREED_FILTERS.map((opt) => (
                    <option key={`breed-opt-${opt.value}`} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              </div>

              {/* Gender */}
              <div className="relative">
                <select
                  value={genderFilter}
                  onChange={(e) => setGenderFilter(e.target.value as 'all' | 'Female' | 'Male')}
                  className="h-9 appearance-none border border-input rounded-lg bg-white text-sm text-foreground pl-3 pr-8 py-0 min-w-[120px] outline-none focus:border-accent cursor-pointer"
                  aria-label="Filter by gender"
                >
                  {GENDER_FILTERS.map((opt) => (
                    <option key={`gender-opt-${opt.value}`} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              </div>

              {/* Status */}
              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as PuppyStatus | 'all')}
                  className="h-9 appearance-none border border-input rounded-lg bg-white text-sm text-foreground pl-3 pr-8 py-0 min-w-[150px] outline-none focus:border-accent cursor-pointer"
                  aria-label="Filter by availability"
                >
                  {STATUS_FILTERS.map((opt) => (
                    <option key={`status-opt-${opt.value}`} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="md:hidden flex items-center gap-1.5 h-9 px-3 rounded-lg border border-border text-sm font-display font-500 hover:bg-muted/50 transition-colors relative"
            >
              <SlidersHorizontal size={14} />
              Filters
              {activeFilterCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent text-white text-xs flex items-center justify-center font-600">
                  {activeFilterCount}
                </span>
              )}
            </button>

            {/* Divider */}
            <div className="hidden md:block h-6 w-px bg-border mx-1" />

            {/* Sort */}
            <div className="relative ml-auto">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="h-9 appearance-none border border-input rounded-lg bg-white text-sm text-foreground pl-3 pr-8 py-0 min-w-[160px] outline-none focus:border-accent cursor-pointer"
                aria-label="Sort puppies"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={`sort-opt-${opt.value}`} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            </div>

            {/* Clear filters */}
            {activeFilterCount > 0 && (
              <button
                onClick={clearAllFilters}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-accent transition-colors font-500"
              >
                <X size={13} />
                Clear
              </button>
            )}
          </div>

          {/* Mobile filter panel */}
          {filtersOpen && (
            <div className="md:hidden mt-3 pt-3 border-t border-border grid grid-cols-2 gap-3 animate-fade-in">
              <div className="relative">
                <label className="text-xs text-muted-foreground font-500 mb-1 block">Breed</label>
                <select
                  value={breedFilter}
                  onChange={(e) => setBreedFilter(e.target.value as BreedSlug | 'all')}
                  className="w-full h-9 appearance-none border border-input rounded-lg bg-white text-sm text-foreground pl-3 pr-8 py-0 outline-none focus:border-accent cursor-pointer"
                >
                  {BREED_FILTERS.map((opt) => (
                    <option key={`m-breed-${opt.value}`} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <label className="text-xs text-muted-foreground font-500 mb-1 block">Gender</label>
                <select
                  value={genderFilter}
                  onChange={(e) => setGenderFilter(e.target.value as 'all' | 'Female' | 'Male')}
                  className="w-full h-9 appearance-none border border-input rounded-lg bg-white text-sm text-foreground pl-3 pr-8 py-0 outline-none focus:border-accent cursor-pointer"
                >
                  {GENDER_FILTERS.map((opt) => (
                    <option key={`m-gender-${opt.value}`} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
              <div className="relative col-span-2">
                <label className="text-xs text-muted-foreground font-500 mb-1 block">Availability</label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as PuppyStatus | 'all')}
                  className="w-full h-9 appearance-none border border-input rounded-lg bg-white text-sm text-foreground pl-3 pr-8 py-0 outline-none focus:border-accent cursor-pointer"
                >
                  {STATUS_FILTERS.map((opt) => (
                    <option key={`m-status-${opt.value}`} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Results count + active filters */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <p className="text-sm text-muted-foreground">
            Showing{' '}
            <span className="font-display font-600 text-foreground">{filtered.length}</span>{' '}
            {filtered.length === 1 ? 'puppy' : 'puppies'}
            {breedFilter !== 'all' && (
              <span> — <span className="font-500 text-foreground">{BREED_FILTERS.find((b) => b.value === breedFilter)?.label}</span></span>
            )}
          </p>

          {/* Active filter chips */}
          <div className="flex flex-wrap gap-2">
            {breedFilter !== 'all' && (
              <button
                onClick={() => setBreedFilter('all')}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-xs font-display font-500"
              >
                {BREED_FILTERS.find((b) => b.value === breedFilter)?.label}
                <X size={11} />
              </button>
            )}
            {genderFilter !== 'all' && (
              <button
                onClick={() => setGenderFilter('all')}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-xs font-display font-500"
              >
                {genderFilter}
                <X size={11} />
              </button>
            )}
            {statusFilter !== 'all' && (
              <button
                onClick={() => setStatusFilter('all')}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-xs font-display font-500"
              >
                {statusFilter}
                <X size={11} />
              </button>
            )}
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
            {filtered.map((puppy) => (
              <PuppyCard key={puppy.id} puppy={puppy} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20 bg-white rounded-2xl border border-border">
            <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-5">
              <Heart size={28} className="text-muted-foreground" />
            </div>
            <h3 className="font-display font-700 text-xl text-foreground mb-2">
              No puppies match these filters
            </h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm mx-auto">
              We don&apos;t currently have a puppy matching those preferences. Try adjusting your filters or join our waitlist to be notified when matching puppies become available.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={clearAllFilters} className="btn-outline text-sm px-6 py-2.5">
                View All Puppies
              </button>
              <Link href="/waitlist" className="btn-accent text-sm px-6 py-2.5">
                Join the Waitlist
              </Link>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        {filtered.length > 0 && (
          <div className="mt-14 text-center bg-secondary rounded-2xl border border-border p-8 lg:p-12">
            <p className="section-label mb-3">Don&apos;t See the Right Puppy?</p>
            <h3 className="font-display font-700 text-2xl text-foreground mb-3">
              Join Our Waitlist
            </h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
              Tell us about your ideal puppy and we&apos;ll reach out when a matching puppy becomes available. Joining the waitlist doesn&apos;t commit you to a purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/waitlist" className="btn-primary text-sm px-7 py-3">
                Join the Waitlist
              </Link>
              <a href="mailto:contact@usapetsforhome.com" className="btn-outline text-sm px-7 py-3">
                Email Us
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}