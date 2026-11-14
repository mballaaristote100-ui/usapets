import React from 'react';
import Link from 'next/link';
import { Search, FileText, CreditCard, Home, ArrowRight } from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


const STEPS = [
  {
    id: 'step-find',
    number: '01',
    icon: Search,
    title: 'Find Your Puppy',
    description:
      'Browse our available puppies and read each detailed profile. Learn about their personality, health, and what makes them unique.',
  },
  {
    id: 'step-apply',
    number: '02',
    icon: FileText,
    title: 'Submit Your Application',
    description:
      'Complete our straightforward buyer application. We take a few minutes to get to know you and your home environment.',
  },
  {
    id: 'step-reserve',
    number: '03',
    icon: CreditCard,
    title: 'Reserve Your Puppy',
    description:
      'After your application is reviewed and approved, complete your reservation deposit to officially hold your puppy.',
  },
  {
    id: 'step-home',
    number: '04',
    icon: Home,
    title: 'Welcome Your Puppy Home',
    description:
      'Arrange pickup or delivery. Your puppy arrives with full health documentation, a care guide, and our ongoing support.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-28 section-warm">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-3">Simple Process</p>
          <h2 className="section-heading mb-4">Bringing Your Puppy Home</h2>
          <p className="section-subheading max-w-xl mx-auto">
            From the moment you find your puppy to the day they arrive home, we guide you through every step.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {STEPS?.map((step, index) => {
            const Icon = step?.icon;
            return (
              <div key={step?.id} className="relative bg-white rounded-2xl p-6 border border-border shadow-card">
                {/* Connector line on desktop */}
                {index < STEPS?.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 w-8 h-px bg-border z-10" />
                )}
                {/* Step number */}
                <div className="step-number mb-2">{step?.number}</div>
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center mb-4">
                  <Icon size={22} className="text-accent" />
                </div>
                <h3 className="font-display font-700 text-base text-foreground mb-2">{step?.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step?.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/how-it-works" className="btn-outline inline-flex items-center gap-2 text-sm px-6 py-3">
            Learn More About the Process
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}