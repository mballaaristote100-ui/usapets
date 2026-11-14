import React from 'react';
import Link from 'next/link';
import { Heart, FileText, CheckCircle, Truck, ArrowRight } from 'lucide-react';
import HowItWorksFAQ from './components/HowItWorksFAQ';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'How It Works | USA Pets for Home',
  description: 'Learn how to find, apply for, and bring home your perfect puppy from USA Pets for Home. A simple four-step process.',
};

const STEPS = [
  {
    number: '01',
    icon: <Heart size={28} className="text-accent" />,
    title: 'Find Your Puppy',
    description: 'Browse our available puppies and explore detailed profiles for each one. Learn about their personality, health history, parents, and what makes them unique. Use our breed pages to discover which breed is the right fit for your family.',
    cta: { label: 'Browse Available Puppies', href: '/available-puppies' },
  },
  {
    number: '02',
    icon: <FileText size={28} className="text-accent" />,
    title: 'Submit Your Application',
    description: 'When you find a puppy you love, complete our straightforward buyer application. We ask a few questions about your home and lifestyle — not to be invasive, but to ensure every puppy goes to a home where they will truly thrive.',
    cta: { label: 'Start an Application', href: '/apply' },
  },
  {
    number: '03',
    icon: <CheckCircle size={28} className="text-accent" />,
    title: 'Reserve Your Puppy',
    description: 'Once your application is reviewed and approved, we will reach out to discuss next steps. A reservation deposit secures your puppy and removes them from the available listings. Deposit amounts are listed on each puppy\'s profile.',
    cta: null,
  },
  {
    number: '04',
    icon: <Truck size={28} className="text-accent" />,
    title: 'Welcome Your Puppy Home',
    description: 'Arrange nationwide delivery to your door — we will make sure your puppy arrives safely and comfortably, along with all their health documentation and a care guide to help you get started.',
    cta: { label: 'Learn About Delivery', href: '/delivery' },
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-16">
        {/* Header */}
        <div className="bg-white border-b border-border py-12 lg:py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              <span>/</span>
              <span className="text-foreground font-500">How It Works</span>
            </nav>
            <div className="max-w-2xl">
              <p className="text-xs font-display font-600 tracking-widest uppercase text-accent mb-3">Simple Process</p>
              <h1 className="font-display font-800 text-4xl lg:text-5xl text-foreground leading-tight mb-4">Bringing Your Puppy Home</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">We have designed a straightforward process to help you find the right puppy, complete your application, and welcome your new companion home — with confidence at every step.</p>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          {/* Steps */}
          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8 mb-20">
            {STEPS?.map((step, i) => (
              <div key={step?.number} className="bg-white border border-border rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-6 right-6 font-display font-800 text-6xl text-muted/40 leading-none select-none">{step?.number}</div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center mb-5">
                    {step?.icon}
                  </div>
                  <h2 className="font-display font-800 text-xl text-foreground mb-3">{step?.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-5">{step?.description}</p>
                  {step?.cta && (
                    <Link href={step?.cta?.href} className="inline-flex items-center gap-1.5 text-sm font-display font-600 text-accent hover:underline">
                      {step?.cta?.label} <ArrowRight size={13} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Trust Section */}
          <div className="bg-secondary border border-border rounded-2xl p-8 sm:p-12 mb-16">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xs font-display font-600 tracking-widest uppercase text-accent mb-3">Our Commitment</p>
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-foreground mb-4">Why Families Choose USA Pets for Home</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">Every puppy we raise is treated as part of our family. We are committed to transparency, health, and making sure every puppy finds a home where they will be loved for life.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                {[
                  { title: 'Health First', desc: 'Every puppy receives veterinary care and health documentation before going home.' },
                  { title: 'Honest Process', desc: 'We do not rush the application process. We take time to match puppies with the right families.' },
                  { title: 'Ongoing Support', desc: 'We are available to answer questions before and after your puppy comes home.' },
                ]?.map((item) => (
                  <div key={item?.title} className="bg-white rounded-xl p-5 border border-border">
                    <h3 className="font-display font-700 text-base text-foreground mb-2">{item?.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item?.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ */}
          <HowItWorksFAQ />

          {/* CTA */}
          <div className="mt-16 bg-foreground rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="font-display font-800 text-2xl sm:text-3xl text-white mb-3">Ready to Find Your Puppy?</h2>
            <p className="text-white/70 mb-8 max-w-md mx-auto">Browse our available puppies and start your journey toward bringing a new companion home.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/available-puppies" className="btn-accent">
                <Heart size={15} />
                View Available Puppies
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-display font-600 text-base px-6 py-3 rounded-xl hover:bg-white/20 transition-colors">
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
