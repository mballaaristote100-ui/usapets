import React from 'react';
import Link from 'next/link';
import { Truck, Plane, Phone } from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


interface Props {
  puppyName: string;
}

const DELIVERY_OPTIONS = [
  {
    id: 'del-ground',
    icon: Truck,
    title: 'Ground Transportation',
    description: 'Safe, comfortable delivery to your door across the continental United States.',
  },
  {
    id: 'del-flight',
    icon: Plane,
    title: 'Puppy Nanny Flight',
    description: 'A dedicated escort accompanies your puppy on a direct flight to your nearest major airport.',
  },
];

export default function PuppyDeliverySection({ puppyName }: Props) {
  return (
    <section className="py-10 border-t border-border">
      <p className="section-label mb-3">Delivery</p>
      <h2 className="font-display font-700 text-2xl text-foreground mb-2">
        Bringing {puppyName} Home
      </h2>
      <p className="text-muted-foreground text-sm mb-6 max-w-lg">
        We offer several safe and comfortable options to get {puppyName} to you wherever you are in the United States.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {DELIVERY_OPTIONS.map((opt) => {
          const Icon = opt.icon;
          return (
            <div key={opt.id} className="bg-white rounded-xl border border-border p-4 shadow-card">
              <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center mb-3">
                <Icon size={18} className="text-accent" />
              </div>
              <h3 className="font-display font-600 text-sm text-foreground mb-1">{opt.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{opt.description}</p>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/delivery" className="btn-outline text-sm px-5 py-2.5">
          Learn About Delivery
        </Link>
        <a
          href="mailto:contact@usapetsforhome.com"
          className="btn-primary text-sm px-5 py-2.5 inline-flex items-center gap-2"
        >
          <Phone size={14} />
          Ask About Delivery for {puppyName}
        </a>
      </div>
    </section>
  );
}