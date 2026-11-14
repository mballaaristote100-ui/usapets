'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQS = [
  { q: 'How long does the application process take?', a: 'We typically review applications within 1–3 business days. We will contact you using the information provided in your application.' },
  { q: 'Is the reservation deposit refundable?', a: 'Reservation deposit terms are outlined in our reservation agreement, which you will receive upon application approval. Please contact us with any questions before submitting your deposit.' },
  { q: 'Can I visit the puppy before applying?', a: 'Please contact us to discuss visit arrangements. We are happy to answer questions and provide additional photos or videos of any puppy you are interested in.' },
  { q: 'What if my application is not approved?', a: 'If we are unable to approve your application for a specific puppy, we will let you know and may suggest alternative options. We approach every application with care and respect.' },
  { q: 'Can I apply for more than one puppy?', a: 'Yes, you may express interest in multiple puppies. Please note that each puppy can only be reserved by one approved applicant.' },
  { q: 'What happens after I pay the reservation deposit?', a: 'Once your deposit is received, your puppy\'s status is updated and they are removed from the available listings. We will then coordinate pickup or delivery arrangements with you.' },
];

export default function HowItWorksFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section>
      <div className="mb-8">
        <p className="text-xs font-display font-600 tracking-widest uppercase text-accent mb-2">Common Questions</p>
        <h2 className="font-display font-800 text-2xl sm:text-3xl text-foreground">Frequently Asked Questions</h2>
      </div>
      <div className="bg-white border border-border rounded-2xl p-6 sm:p-8 max-w-3xl">
        {FAQS?.map((faq, i) => (
          <div key={i} className="border-b border-border last:border-0">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex items-center justify-between w-full py-4 text-left gap-4"
              aria-expanded={openIndex === i}
            >
              <span className="font-display font-600 text-foreground text-sm sm:text-base">{faq?.q}</span>
              {openIndex === i ? <ChevronUp size={16} className="text-accent flex-shrink-0" /> : <ChevronDown size={16} className="text-muted-foreground flex-shrink-0" />}
            </button>
            {openIndex === i && (
              <div className="pb-4 pr-8">
                <p className="text-sm text-muted-foreground leading-relaxed">{faq?.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
