import React from 'react';
import { ShieldCheck, Heart, Home, Phone } from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


const REASONS = [
  {
    id: 'reason-health',
    icon: ShieldCheck,
    title: 'Health Comes First',
    description:
      'Every puppy is vet checked and comes with health documentation current for their age. We take the health of our puppies seriously from the day they are born.',
  },
  {
    id: 'reason-raised',
    icon: Home,
    title: 'Home-Raised with Love',
    description:
      'Our puppies are raised in warm, caring home environments — not kennels. They are socialized with people, children, and everyday life from birth.',
  },
  {
    id: 'reason-breeds',
    icon: Heart,
    title: 'Carefully Selected Breeds',
    description:
      'We specialize in five beloved breeds and focus entirely on temperament, health, and the joy they bring to families across the country.',
  },
  {
    id: 'reason-support',
    icon: Phone,
    title: 'Support After You Bring Them Home',
    description:
      'We are here for you after your puppy arrives. Our team is available to answer questions and help your new family member settle in beautifully.',
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Content */}
          <div>
            <p className="section-label mb-3">Why Families Choose Us</p>
            <h2 className="section-heading mb-5 text-balance">
              Raised with Care. Matched with Love.
            </h2>
            <p className="section-subheading mb-8">
              At USA Pets for Home, every puppy is more than a transaction — it is a new family member. We take that responsibility seriously at every step.
            </p>

            <div className="space-y-6">
              {REASONS?.map((reason) => {
                const Icon = reason?.icon;
                return (
                  <div key={reason?.id} className="flex gap-4">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent-light flex items-center justify-center">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display font-600 text-base text-foreground mb-1">{reason?.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{reason?.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&q=80"
                    alt="Fluffy apricot Teacup Poodle puppy sitting in sunlight"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=500&q=80"
                    alt="Fawn French Bulldog puppy with bat ears sitting on white surface"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-3 mt-6">
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=500&q=80"
                    alt="Yorkshire Terrier puppy with silky tan coat on wooden floor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=500&q=80"
                    alt="English Bulldog puppy with wrinkled face resting on grass"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}