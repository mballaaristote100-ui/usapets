'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { PUPPIES, getPuppyAge, formatPrice } from '@/data/puppies';
import { Heart, ShieldCheck, Syringe, MapPin, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const BREED_SLUGS = ['teacup-poodle', 'yorkie', 'goldendoodle', 'french-bulldog', 'english-bulldog'] as const;

function getFeaturedPuppies() {
  return BREED_SLUGS.map((breedSlug) => {
    const match =
      PUPPIES.find((p) => p.breedSlug === breedSlug && p.status === 'Available') ??
      PUPPIES.find((p) => p.breedSlug === breedSlug);
    return match;
  }).filter(Boolean) as typeof PUPPIES;
}

export default function FeaturedPuppySection() {
  const slides = getFeaturedPuppies();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, [slides.length]);

  const prev = () => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const featured = slides[current];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-label mb-3">Featured Puppies</p>
          <h2 className="section-heading mb-4">Meet Our Featured Puppies</h2>
          <p className="section-subheading max-w-lg mx-auto">
            One special puppy from each of our five beloved breeds — all looking for their forever family.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="bg-gradient-to-br from-secondary to-accent-light rounded-3xl overflow-hidden border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px]">
                <AppImage
                  key={featured?.id}
                  src={featured?.featuredImage}
                  alt={featured?.featuredImageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-opacity duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-5">
                  <span className="status-available health-badge font-display font-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Available
                  </span>
                  <span
                    className={`health-badge font-display font-600 ${
                      featured?.gender === 'Female' ? 'bg-pink-50 text-pink-600' : 'bg-blue-50 text-blue-600'
                    }`}
                  >
                    {featured?.gender}
                  </span>
                </div>

                <h3 className="font-display font-800 text-4xl text-foreground mb-1">{featured?.name}</h3>
                <p className="text-muted-foreground font-500 mb-5">{featured?.breed}</p>

                <p className="text-foreground/80 leading-relaxed mb-6 text-base">
                  {featured?.fullDescription?.slice(0, 220)}...
                </p>

                {/* Details */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: 'Age', value: getPuppyAge(featured?.dateOfBirth) },
                    { label: 'Color', value: featured?.color },
                    { label: 'Expected Size', value: featured?.expectedAdultSize },
                    { label: 'Deposit', value: formatPrice(featured?.depositAmount) },
                  ]?.map((detail) => (
                    <div key={`featured-detail-${detail?.label}`} className="bg-white/60 rounded-xl p-3 border border-white/80">
                      <p className="text-xs text-muted-foreground font-500 mb-0.5">{detail?.label}</p>
                      <p className="font-display font-600 text-sm text-foreground">{detail?.value}</p>
                    </div>
                  ))}
                </div>

                {/* Health badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured?.vetChecked && (
                    <span className="health-badge bg-green-50 text-green-700 text-xs">
                      <ShieldCheck size={11} /> Vet Checked
                    </span>
                  )}
                  <span className="health-badge bg-blue-50 text-blue-700 text-xs">
                    <Syringe size={11} /> Vaccinated
                  </span>
                  {featured?.deliveryAvailable && (
                    <span className="health-badge bg-purple-50 text-purple-700 text-xs">
                      <MapPin size={11} /> Delivery Available
                    </span>
                  )}
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Asking Price</p>
                    <p className="font-display font-800 text-3xl text-foreground">{formatPrice(featured?.price)}</p>
                  </div>
                  <Link
                    href={`/individual-puppy-detail?slug=${featured?.slug}`}
                    className="btn-accent px-6 py-3"
                  >
                    <Heart size={15} />
                    Meet {featured?.name}
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Prev / Next buttons */}
          <button
            onClick={prev}
            aria-label="Previous puppy"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-10 w-11 h-11 rounded-full bg-white shadow-md border border-border flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            aria-label="Next puppy"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-10 w-11 h-11 rounded-full bg-white shadow-md border border-border flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => { setCurrent(i); setPaused(true); }}
              aria-label={`Go to ${slide.name}`}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? 'w-6 h-2.5 bg-primary' :'w-2.5 h-2.5 bg-border hover:bg-muted-foreground'
              }`}
            />
          ))}
        </div>

        {/* Breed label strip */}
        <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => { setCurrent(i); setPaused(true); }}
              className={`text-xs font-display font-600 px-3 py-1 rounded-full border transition-colors ${
                i === current
                  ? 'bg-primary text-white border-primary' :'bg-white text-muted-foreground border-border hover:border-primary hover:text-primary'
              }`}
            >
              {slide.breed}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}