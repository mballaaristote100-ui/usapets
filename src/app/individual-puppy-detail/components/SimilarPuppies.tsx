import React from 'react';
import Link from 'next/link';
import PuppyCard from '@/components/PuppyCard';
import { type Puppy } from '@/data/puppies';
import { ArrowRight } from 'lucide-react';

interface Props {
  puppies: Puppy[];
  breedName: string;
}

export default function SimilarPuppies({ puppies, breedName }: Props) {
  if (puppies.length === 0) return null;

  return (
    <section className="py-10 border-t border-border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="section-label mb-1">You Might Also Love</p>
          <h2 className="font-display font-700 text-2xl text-foreground">
            More {breedName} Puppies
          </h2>
        </div>
        <Link
          href="/available-puppies"
          className="hidden sm:flex items-center gap-1.5 text-sm font-display font-600 text-accent hover:underline"
        >
          View All
          <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {puppies.map((puppy) => (
          <PuppyCard key={puppy.id} puppy={puppy} />
        ))}
      </div>

      <div className="mt-6 sm:hidden">
        <Link href="/available-puppies" className="btn-outline w-full justify-center text-sm py-2.5">
          View All Available Puppies
          <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}