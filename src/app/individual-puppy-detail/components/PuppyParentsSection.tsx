import React from 'react';
import AppImage from '@/components/ui/AppImage';
import { type PuppyParent } from '@/data/puppies';

interface Props {
  mother?: PuppyParent;
  father?: PuppyParent;
}

export default function PuppyParentsSection({ mother, father }: Props) {
  const parents = [
    mother ? { ...mother, role: 'Mother' } : null,
    father ? { ...father, role: 'Father' } : null,
  ].filter(Boolean) as (PuppyParent & { role: string })[];

  if (parents.length === 0) return null;

  return (
    <section className="py-10 border-t border-border">
      <p className="section-label mb-3">The Parents</p>
      <h2 className="font-display font-700 text-2xl text-foreground mb-6">
        Meet the Parents
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl">
        {parents.map((parent) => (
          <div
            key={`parent-${parent.role}`}
            className="flex items-center gap-4 bg-white rounded-2xl border border-border p-4 shadow-card"
          >
            <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
              <AppImage
                src={parent.image}
                alt={parent.imageAlt}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-500 uppercase tracking-wide mb-0.5">{parent.role}</p>
              <p className="font-display font-700 text-lg text-foreground">{parent.name}</p>
              <p className="text-sm text-muted-foreground">{parent.breed}</p>
              {parent.description && (
                <p className="text-xs text-muted-foreground mt-1">{parent.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}