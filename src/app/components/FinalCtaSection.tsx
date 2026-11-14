import React from 'react';
import Link from 'next/link';
import { Heart, ArrowRight } from 'lucide-react';

export default function FinalCtaSection() {
  return (
    <section className="py-20 lg:py-24 section-warm">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-accent-light flex items-center justify-center mx-auto mb-6">
            <Heart size={28} className="text-accent fill-accent" />
          </div>
          <h2 className="section-heading mb-5 text-balance">
            Ready to Find Your Perfect Companion?
          </h2>
          <p className="section-subheading mb-8 max-w-lg mx-auto">
            Browse our available puppies today. Your new best friend might already be waiting for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/available-puppies" className="btn-accent text-base px-8 py-3.5">
              <Heart size={16} />
              View Available Puppies
              <ArrowRight size={16} />
            </Link>
            <a href="mailto:contact@usapetsforhome.com" className="btn-outline text-base px-8 py-3.5">
              Contact Us
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Questions? Email us at{' '}
            <a href="mailto:contact@usapetsforhome.com" className="text-accent hover:underline font-500">
              contact@usapetsforhome.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}