import React from 'react';
import { type Puppy } from '@/data/puppies';

interface Props {
  puppy: Puppy;
}

export default function PuppyAboutSection({ puppy }: Props) {
  return (
    <section className="py-10 border-t border-border">
      <div className="max-w-3xl">
        <p className="section-label mb-3">About</p>
        <h2 className="font-display font-700 text-2xl text-foreground mb-4">
          About {puppy.name}
        </h2>
        <p className="text-foreground/80 leading-relaxed text-base mb-6">
          {puppy.fullDescription}
        </p>

        {/* Personality grid */}
        {puppy.personality.length > 0 && (
          <div>
            <p className="text-sm font-display font-600 text-muted-foreground uppercase tracking-wide mb-3">
              Personality Highlights
            </p>
            <div className="flex flex-wrap gap-2">
              {puppy.personality.map((trait) => (
                <span
                  key={`about-trait-${trait}`}
                  className="px-4 py-2 bg-secondary rounded-full text-sm font-display font-600 text-foreground border border-border"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}