import React from 'react';
import AppImage from '@/components/ui/AppImage';
import { TESTIMONIALS } from '@/data/puppies';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 section-warm">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-3">Happy Families</p>
          <h2 className="section-heading mb-4">Puppies Who Found Their Home</h2>
          <p className="section-subheading max-w-xl mx-auto">
            Real families sharing their experiences. These are their stories.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS?.map((t) => (
            <div key={t?.id} className="testimonial-card flex flex-col">
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t?.rating })?.map((_, i) => (
                  <Star key={`star-${t?.id}-${i}`} size={14} className="text-accent fill-accent" />
                ))}
              </div>

              {/* Review */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                &ldquo;{t?.review}&rdquo;
              </p>

              {/* Customer info */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <AppImage
                    src={t?.customerImage}
                    alt={t?.customerImageAlt}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="font-display font-600 text-sm text-foreground">{t?.customerName}</p>
                  <p className="text-xs text-muted-foreground">{t?.location}</p>
                </div>
                <div className="ml-auto w-9 h-9 rounded-lg overflow-hidden flex-shrink-0">
                  <AppImage
                    src={t?.puppyImage}
                    alt={t?.puppyImageAlt}
                    width={36}
                    height={36}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Puppy tag */}
              <div className="mt-3 pt-3 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  Owner of <span className="font-display font-600 text-accent">{t?.puppyName}</span>{' '}
                  <span className="text-muted-foreground/60">— {t?.breed}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}