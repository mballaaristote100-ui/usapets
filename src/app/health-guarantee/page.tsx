import React from 'react';
import Link from 'next/link';
import { Shield, Heart, Syringe, Stethoscope, Microscope, FileText, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Health Guarantee | USA Pets for Home',
  description: 'Learn about our health guarantee, veterinary care standards, and the health documentation that comes with every puppy from USA Pets for Home.',
};

const HEALTH_ITEMS = [
  {
    icon: <Stethoscope size={22} className="text-accent" />,
    title: 'Veterinary Examination',
    description: 'Every puppy receives a thorough veterinary examination before going home. A health certificate is provided confirming the puppy was examined and found to be in good health at the time of the exam.',
  },
  {
    icon: <Syringe size={22} className="text-accent" />,
    title: 'Vaccinations',
    description: 'Puppies receive age-appropriate vaccinations before going home. Vaccination records are provided with each puppy. We follow a schedule appropriate for the puppy\'s age and breed.',
  },
  {
    icon: <Shield size={22} className="text-accent" />,
    title: 'Deworming',
    description: 'All puppies are dewormed on a regular schedule from an early age. Deworming records are included with your puppy\'s health documentation.',
  },
  {
    icon: <Microscope size={22} className="text-accent" />,
    title: 'Microchipping',
    description: 'Many of our puppies are microchipped before going home. Microchip status is listed on each individual puppy\'s profile. Registration paperwork is provided where applicable.',
  },
  {
    icon: <FileText size={22} className="text-accent" />,
    title: 'Health Records',
    description: 'Complete health records accompany every puppy, including veterinary visit notes, vaccination history, deworming records, and any other relevant health documentation.',
  },
  {
    icon: <Heart size={22} className="text-accent" />,
    title: 'Health Guarantee',
    description: 'We provide a health guarantee with every puppy. Guarantee terms vary by puppy and are detailed in the individual puppy\'s profile and in the reservation agreement provided upon approval.',
  },
];

export default function HealthGuaranteePage() {
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
            <span className="text-foreground font-500">Health Guarantee</span>
          </nav>
          <div className="max-w-2xl">
            <p className="text-xs font-display font-600 tracking-widest uppercase text-accent mb-3">Our Commitment</p>
            <h1 className="font-display font-800 text-4xl lg:text-5xl text-foreground leading-tight mb-4">Health & Care</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">The health of our puppies is our highest priority. Every puppy we raise receives proper veterinary care, age-appropriate vaccinations, and the documentation you need to continue their care with your own veterinarian.</p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Health Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {HEALTH_ITEMS?.map((item) => (
            <div key={item?.title} className="bg-white border border-border rounded-2xl p-7">
              <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center mb-5">
                {item?.icon}
              </div>
              <h2 className="font-display font-700 text-lg text-foreground mb-3">{item?.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{item?.description}</p>
            </div>
          ))}
        </div>

        {/* Health Guarantee Terms */}
        <div className="bg-secondary border border-border rounded-2xl p-8 sm:p-12 mb-16">
          <div className="max-w-3xl">
            <p className="text-xs font-display font-600 tracking-widest uppercase text-accent mb-3">Guarantee Terms</p>
            <h2 className="font-display font-800 text-2xl sm:text-3xl text-foreground mb-5">Our Health Guarantee</h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>We stand behind the health of every puppy we raise. Each puppy comes with a health guarantee, the specific terms of which are outlined in the reservation agreement provided upon application approval.</p>
              <p>Our health guarantee covers genetic health conditions as specified in the agreement. It does not cover conditions resulting from accidents, environmental factors, or conditions that develop after the puppy leaves our care.</p>
              <p>We strongly recommend scheduling a veterinary examination within 72 hours of bringing your puppy home. This allows your veterinarian to establish a baseline health record and address any questions you may have.</p>
              <p className="bg-white border border-border rounded-xl p-4 text-sm">
                <strong className="font-display font-700 text-foreground">Note:</strong> Specific guarantee terms, duration, and conditions are detailed in the individual puppy profile and the reservation agreement. Please review these carefully before completing your reservation.
              </p>
            </div>
          </div>
        </div>

        {/* Early Care */}
        <div className="bg-white border border-border rounded-2xl p-8 sm:p-12 mb-16">
          <p className="text-xs font-display font-600 tracking-widest uppercase text-accent mb-3">Early Life</p>
          <h2 className="font-display font-800 text-2xl sm:text-3xl text-foreground mb-6">How We Raise Our Puppies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: 'Home Environment', desc: 'Our puppies are raised in a warm, clean home environment — not in kennels or commercial facilities. They are socialized with people, children, and everyday household sounds from birth.' },
              { title: 'Early Socialization', desc: 'From their first weeks, puppies are gently handled and exposed to a variety of sights, sounds, and experiences to build confidence and a well-rounded temperament.' },
              { title: 'Nutrition', desc: 'Puppies receive age-appropriate, high-quality nutrition. We provide a starter food sample and feeding recommendations when your puppy goes home.' },
              { title: 'Veterinary Partnership', desc: 'We work with licensed veterinarians to ensure every puppy receives proper care, examinations, and documentation before going to their new home.' },
            ]?.map((item) => (
              <div key={item?.title} className="bg-secondary rounded-xl p-5 border border-border">
                <h3 className="font-display font-700 text-base text-foreground mb-2">{item?.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item?.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-foreground rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="font-display font-800 text-2xl sm:text-3xl text-white mb-3">Questions About Our Health Standards?</h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto">We are happy to answer any questions about our health practices, veterinary care, or the documentation that comes with your puppy.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-accent">
              <MessageCircle size={15} />
              Contact Us
            </Link>
            <Link href="/available-puppies" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-display font-600 text-base px-6 py-3 rounded-xl hover:bg-white/20 transition-colors">
              <Heart size={15} />
              View Available Puppies
            </Link>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}
