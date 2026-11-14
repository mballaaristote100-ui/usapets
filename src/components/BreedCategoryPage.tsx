'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PUPPIES, type BreedSlug } from '@/data/puppies';
import PuppyCard from '@/components/PuppyCard';
import { ChevronDown, ChevronUp, Heart, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface BreedFAQ {
  q: string;
  a: string;
}

interface BreedCategoryPageProps {
  breedSlug: BreedSlug;
  breedName: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string;
  temperament: string;
  typicalSize: string;
  grooming: string;
  exercise: string;
  training: string;
  familySuitability: string;
  considerations: string[];
  faqs: BreedFAQ[];
}

function FAQItem({ faq }: { faq: BreedFAQ }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 text-left gap-4"
        aria-expanded={open}
      >
        <span className="font-display font-600 text-foreground text-sm sm:text-base">{faq.q}</span>
        {open ? <ChevronUp size={16} className="text-accent flex-shrink-0" /> : <ChevronDown size={16} className="text-muted-foreground flex-shrink-0" />}
      </button>
      {open && (
        <div className="pb-4 pr-8">
          <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

export default function BreedCategoryPage({
  breedSlug,
  breedName,
  heroImage,
  heroImageAlt,
  intro,
  temperament,
  typicalSize,
  grooming,
  exercise,
  training,
  familySuitability,
  considerations,
  faqs,
}: BreedCategoryPageProps) {
  const breedPuppies = PUPPIES.filter((p) => p.breedSlug === breedSlug);
  const availablePuppies = breedPuppies.filter((p) => p.status === 'Available');

  const breedPageSlug = breedSlug === 'teacup-poodle' ? 'teacup-poodles' : breedSlug === 'yorkie' ? 'yorkie-puppies' : breedSlug === 'goldendoodle' ? 'goldendoodles' : breedSlug === 'french-bulldog' ? 'french-bulldogs' : 'english-bulldogs';

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-16">
        {/* Hero */}
        <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
          <Image src={heroImage} alt={heroImageAlt} fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-14">
            <nav className="flex items-center gap-2 text-sm text-white/70 mb-3">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/available-puppies" className="hover:text-white transition-colors">Breeds</Link>
              <span>/</span>
              <span className="text-white">{breedName}</span>
            </nav>
            <h1 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">{breedName}</h1>
            <p className="text-white/80 mt-2 text-base max-w-xl">{availablePuppies.length > 0 ? `${availablePuppies.length} puppy${availablePuppies.length !== 1 ? 'ies' : ''} available now` : 'Join the waitlist to be notified'}</p>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* Intro */}
          <div className="max-w-3xl mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">{intro}</p>
          </div>

          {/* Available Puppies */}
          <section className="mb-16">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-xs font-display font-600 tracking-widest uppercase text-accent mb-2">Browse Now</p>
                <h2 className="font-display font-800 text-2xl sm:text-3xl text-foreground">Available {breedName}</h2>
              </div>
              <Link href="/available-puppies" className="text-sm text-accent font-500 hover:underline flex items-center gap-1 flex-shrink-0">
                View all puppies <ArrowRight size={13} />
              </Link>
            </div>

            {breedPuppies.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {breedPuppies.map((p) => <PuppyCard key={p.id} puppy={p} />)}
              </div>
            ) : (
              <div className="bg-secondary border border-border rounded-2xl p-12 text-center">
                <div className="text-5xl mb-4">🐾</div>
                <h3 className="font-display font-700 text-xl text-foreground mb-2">No {breedName} Available Right Now</h3>
                <p className="text-muted-foreground mb-6 max-w-sm mx-auto">We're preparing for our next litter. Join the waitlist to be the first to know when puppies become available.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/waitlist" className="btn-accent">
                    <Heart size={15} />
                    Join the Waitlist
                  </Link>
                  <Link href="/available-puppies" className="btn-outline">View All Puppies</Link>
                </div>
              </div>
            )}
          </section>

          {/* Breed Info Grid */}
          <section className="mb-16">
            <div className="mb-8">
              <p className="text-xs font-display font-600 tracking-widest uppercase text-accent mb-2">Breed Guide</p>
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-foreground">About {breedName}</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white border border-border rounded-2xl p-6 sm:p-8">
                  <h3 className="font-display font-700 text-lg text-foreground mb-3">Temperament</h3>
                  <p className="text-muted-foreground leading-relaxed">{temperament}</p>
                </div>
                <div className="bg-white border border-border rounded-2xl p-6 sm:p-8">
                  <h3 className="font-display font-700 text-lg text-foreground mb-3">Family Suitability</h3>
                  <p className="text-muted-foreground leading-relaxed">{familySuitability}</p>
                </div>
                <div className="bg-white border border-border rounded-2xl p-6 sm:p-8">
                  <h3 className="font-display font-700 text-lg text-foreground mb-4">Things to Consider</h3>
                  <ul className="space-y-3">
                    {considerations.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-accent-light text-accent font-display font-700 text-xs flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                        <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: 'Typical Size', value: typicalSize },
                  { label: 'Grooming', value: grooming },
                  { label: 'Exercise', value: exercise },
                  { label: 'Training', value: training },
                ].map((item) => (
                  <div key={item.label} className="bg-secondary border border-border rounded-xl p-5">
                    <p className="text-xs font-display font-600 tracking-widest uppercase text-accent mb-2">{item.label}</p>
                    <p className="text-sm text-foreground leading-relaxed">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <div className="mb-8">
              <p className="text-xs font-display font-600 tracking-widest uppercase text-accent mb-2">Common Questions</p>
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-foreground">{breedName} FAQ</h2>
            </div>
            <div className="bg-white border border-border rounded-2xl p-6 sm:p-8 max-w-3xl">
              {faqs.map((faq, i) => <FAQItem key={i} faq={faq} />)}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-foreground rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="font-display font-800 text-2xl sm:text-3xl text-white mb-3">Ready to Meet Your {breedName.replace(/s$/, '')}?</h2>
            <p className="text-white/70 mb-8 max-w-md mx-auto">Browse our available puppies or join the waitlist to be notified when new puppies arrive.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/available-puppies" className="btn-accent">
                <Heart size={15} />
                View Available {breedName}
              </Link>
              <Link href="/waitlist" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-display font-600 text-base px-6 py-3 rounded-xl hover:bg-white/20 transition-colors">
                Join the Waitlist
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
