import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { BREEDS } from '@/data/puppies';
import { ArrowRight } from 'lucide-react';

export default function BreedCardsSection() {
  return (
    <section id="breeds" className="py-20 lg:py-28 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-3">Our Breeds</p>
          <h2 className="section-heading mb-4">Find the Breed That&apos;s Right for You</h2>
          <p className="section-subheading max-w-xl mx-auto">
            Five beloved breeds, each with a unique personality. Browse by breed to find the puppy that fits your lifestyle perfectly.
          </p>
        </div>

        {/* Breed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {BREEDS?.map((breed) => (
            <Link key={breed?.id} href={breed?.href} className="breed-card group block">
              {/* Image */}
              <div className="relative overflow-hidden aspect-[3/4]">
                <AppImage
                  src={breed?.image}
                  alt={breed?.imageAlt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover transition-transform duration-400 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3.5">
                  <h3 className="font-display font-700 text-white text-base leading-tight mb-0.5">
                    {breed?.name}
                  </h3>
                  <p className="text-xs text-white/70 leading-tight hidden sm:block">{breed?.tagline}</p>
                </div>
              </div>
              {/* Card body */}
              <div className="p-3.5">
                <p className="text-xs text-muted-foreground leading-relaxed mb-2.5 line-clamp-2">
                  {breed?.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-display font-600 text-accent group-hover:gap-2 transition-all">
                  View Puppies <ArrowRight size={11} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}