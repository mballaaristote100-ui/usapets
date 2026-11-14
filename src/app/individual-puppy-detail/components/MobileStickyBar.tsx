'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { type Puppy, formatPrice } from '@/data/puppies';
import { Heart, Mail } from 'lucide-react';

interface Props {
  puppy: Puppy;
}

export default function MobileStickyBar({ puppy }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isAvailable = puppy.status === 'Available';

  return (
    <div
      className={`lg:hidden sticky-cta-bar transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!visible}
    >
      <div className="flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="font-display font-700 text-base text-foreground truncate">{puppy.name}</p>
          {isAvailable && (
            <p className="text-sm text-muted-foreground">{formatPrice(puppy.price)}</p>
          )}
        </div>

        {isAvailable ? (
          <>
            <a
              href={`mailto:contact@usapetsforhome.com?subject=Question about ${puppy.name}`}
              className="flex-shrink-0 w-11 h-11 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
              aria-label={`Ask about ${puppy.name}`}
            >
              <Mail size={18} />
            </a>
            <Link
              href={`/apply?puppy=${puppy.slug}`}
              className="btn-accent flex-shrink-0 text-sm px-5 py-2.5"
            >
              <Heart size={14} />
              Apply to Reserve
            </Link>
          </>
        ) : (
          <Link
            href="/available-puppies"
            className="btn-primary flex-shrink-0 text-sm px-5 py-2.5"
          >
            Find Similar Puppies
          </Link>
        )}
      </div>
    </div>
  );
}