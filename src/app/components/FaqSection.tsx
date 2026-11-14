'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FAQS } from '@/data/puppies';
import { ChevronDown, ArrowRight } from 'lucide-react';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('faq-001');

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <div>
            <p className="section-label mb-3">FAQ</p>
            <h2 className="section-heading mb-5 text-balance">
              Questions We Hear Most Often
            </h2>
            <p className="section-subheading mb-8">
              Everything you need to know about finding, reserving, and bringing home your puppy.
            </p>
            <Link href="/faq" className="btn-outline inline-flex items-center gap-2 text-sm px-6 py-3">
              View All FAQs
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right — Accordion */}
          <div className="divide-y divide-border">
            {FAQS?.slice(0, 5)?.map((faq) => (
              <div key={faq?.id} className="faq-item py-5">
                <button
                  onClick={() => setOpenId(openId === faq?.id ? null : faq?.id)}
                  className="flex items-start justify-between w-full gap-4 text-left"
                  aria-expanded={openId === faq?.id}
                >
                  <span className="font-display font-600 text-sm text-foreground leading-snug pr-2">
                    {faq?.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 text-muted-foreground mt-0.5 transition-transform duration-200 ${
                      openId === faq?.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openId === faq?.id && (
                  <div className="mt-3 pr-8 animate-fade-in">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq?.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}