import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { ArrowRight, ShieldCheck, Truck, Heart } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient pt-16">
      {/* Background decorative blob */}
      <div
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #fef3c7 0%, transparent 70%)' }}
      />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-accent-light border border-amber-200 rounded-full px-4 py-1.5 mb-6">
              <Heart size={13} className="text-accent fill-accent" />
              <span className="text-sm font-display font-600 text-accent">
                Puppies Available Now
              </span>
            </div>

            <h1 className="hero-heading mb-5 text-balance">
              Your New Best Friend{' '}
              <span className="gradient-text">Is Waiting</span>
            </h1>

            <p className="section-subheading text-lg mb-8 max-w-lg">
              Meet healthy, happy puppies raised with care and ready to become part of your family. Five beloved breeds, one trusted home.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link href="/available-puppies" className="btn-accent text-base px-7 py-3.5">
                View Available Puppies
                <ArrowRight size={17} />
              </Link>
              <Link href="#breeds" className="btn-outline text-base px-7 py-3.5">
                Explore Breeds
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-5">
              <div className="trust-badge-item">
                <ShieldCheck size={16} className="text-accent" />
                Vet Checked
              </div>
              <div className="trust-badge-item">
                <Heart size={16} className="text-accent" />
                Health Information Provided
              </div>
              <div className="trust-badge-item">
                <Truck size={16} className="text-accent" />
                Nationwide Delivery
              </div>
            </div>
          </div>

          {/* Right — Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-warm-lg aspect-[5/4]">
              <AppImage
                src="https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=900&q=80"
                alt="Happy golden Goldendoodle puppy with wavy coat sitting in sunlit garden surrounded by greenery"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Floating status card */}
              <div className="absolute bottom-5 left-5 bg-white rounded-xl px-4 py-3 shadow-warm-lg border border-border">
                <p className="text-xs text-muted-foreground font-500 mb-0.5">Currently Available</p>
                <p className="font-display font-700 text-foreground text-lg leading-tight">9 Puppies</p>
                <p className="text-xs text-muted-foreground">Ready for their forever homes</p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-accent/10 -z-10" />
            <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-secondary -z-10" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce opacity-50">
        <div className="w-px h-8 bg-muted-foreground/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
      </div>
    </section>
  );
}