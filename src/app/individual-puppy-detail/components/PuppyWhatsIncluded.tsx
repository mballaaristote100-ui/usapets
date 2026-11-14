import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface Props {
  puppyName: string;
  items: string[];
}

export default function PuppyWhatsIncluded({ puppyName, items }: Props) {
  return (
    <section className="py-10 border-t border-border">
      <p className="section-label mb-3">What&apos;s Included</p>
      <h2 className="font-display font-700 text-2xl text-foreground mb-6">
        What Comes with {puppyName}
      </h2>

      <div className="bg-secondary rounded-2xl border border-border p-6">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {items.map((item) => (
            <li key={`included-${item}`} className="flex items-start gap-3">
              <CheckCircle2 size={17} className="text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground/80 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}