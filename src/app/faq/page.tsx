'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ChevronDown, ChevronUp, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FAQ_CATEGORIES = [
  {
    category: 'Finding a Puppy',
    faqs: [
      { q: 'How do I find available puppies?', a: 'Visit our Available Puppies page to browse all current puppies. You can filter by breed, gender, and availability. Each puppy has a detailed profile with photos, health information, and personality details.' },
      { q: 'Can I see a puppy before applying?', a: 'Please contact us to discuss visit arrangements. We are also happy to provide additional photos and videos of any puppy you are interested in.' },
      { q: 'What breeds do you offer?', a: 'We specialize in Teacup Poodles, Yorkshire Terriers (Yorkies), Goldendoodles, French Bulldogs, and English Bulldogs. Visit our breed pages to learn more about each breed.' },
      { q: 'How often do new puppies become available?', a: 'New puppies become available throughout the year. Join our waitlist to be notified when puppies matching your preferences become available.' },
    ],
  },
  {
    category: 'Applications',
    faqs: [
      { q: 'How do I apply for a puppy?', a: 'Visit the puppy\'s profile page and click "Apply to Reserve." You will be guided through a short multi-step application covering your contact information, home environment, and puppy preferences.' },
      { q: 'How long does the application review take?', a: 'We typically review applications within 1–3 business days. We will contact you using the information provided in your application.' },
      { q: 'What happens if my application is not approved?', a: 'If we are unable to approve your application for a specific puppy, we will let you know respectfully. We may suggest alternative options that might be a better fit.' },
      { q: 'Can I apply for more than one puppy?', a: 'Yes, you may express interest in multiple puppies. Each puppy can only be reserved by one approved applicant.' },
    ],
  },
  {
    category: 'Reservations',
    faqs: [
      { q: 'How do I reserve a puppy?', a: 'After your application is approved, we will reach out to discuss next steps. A reservation deposit secures your puppy and removes them from the available listings.' },
      { q: 'What is the reservation deposit?', a: 'The reservation deposit amount is listed on each puppy\'s individual profile. It is applied toward the total adoption price.' },
      { q: 'Is the reservation deposit refundable?', a: 'Reservation deposit terms are outlined in the reservation agreement provided upon approval. Please review these carefully and contact us with any questions before submitting your deposit.' },
      { q: 'Can two people reserve the same puppy?', a: 'No. Once a reservation deposit is received and confirmed, the puppy\'s status is updated and they are removed from available listings.' },
    ],
  },
  {
    category: 'Payments',
    faqs: [
      { q: 'What payment methods do you accept?', a: 'Please contact us to discuss available payment options. We use secure payment processing for all transactions.' },
      { q: 'When is the remaining balance due?', a: 'The remaining balance (total price minus deposit) is typically due before or at the time of pickup or delivery. Specific terms are outlined in your reservation agreement.' },
      { q: 'Are prices negotiable?', a: 'Our puppy prices reflect the care, health testing, veterinary costs, and quality of breeding that goes into each puppy. Prices are set and listed on each puppy\'s profile.' },
    ],
  },
  {
    category: 'Health & Care',
    faqs: [
      { q: 'What health documentation comes with my puppy?', a: 'Every puppy comes with health records, vaccination documentation, a veterinary health certificate, and deworming records. Microchip paperwork is included where applicable.' },
      { q: 'What is your health guarantee?', a: 'We provide a health guarantee with every puppy. Specific terms vary by puppy and are detailed in the reservation agreement. Visit our Health Guarantee page for more information.' },
      { q: 'Should I take my puppy to a vet after bringing them home?', a: 'Yes — we strongly recommend scheduling a veterinary examination within 72 hours of bringing your puppy home. This establishes a baseline health record and gives you an opportunity to ask your vet any questions.' },
      { q: 'Are your puppies vaccinated?', a: 'Yes. All puppies receive age-appropriate vaccinations before going home. Vaccination records are provided with each puppy.' },
    ],
  },
  {
    category: 'Pickup & Delivery',
    faqs: [
      { q: 'What delivery options are available?', a: 'We offer ground transportation and puppy nanny flight delivery. Visit our Delivery page for full details on each option.' },
      { q: 'Do you deliver nationwide?', a: 'Yes, we serve families across the United States. Delivery costs and availability vary by location and method. Contact us for a specific quote.' },
      { q: 'Do you offer international delivery?', a: 'International arrangements may be possible depending on destination and applicable requirements. Please contact us to discuss your specific situation.' },
      { q: 'How old must a puppy be before they can travel?', a: 'Puppies must meet minimum age and health requirements before travel. We coordinate all logistics after your reservation is confirmed.' },
    ],
  },
  {
    category: 'Waitlist',
    faqs: [
      { q: 'How does the waitlist work?', a: 'Join our waitlist by completing the waitlist form with your preferences. We will contact you when a puppy matching your criteria becomes available. Joining the waitlist does not guarantee a puppy.' },
      { q: 'Is there a fee to join the waitlist?', a: 'No — joining the waitlist is free and does not obligate you to purchase a puppy.' },
      { q: 'How long is the waitlist?', a: 'Wait times vary by breed and availability. We will give you an honest estimate when you join.' },
    ],
  },
  {
    category: 'After Bringing Your Puppy Home',
    faqs: [
      { q: 'What support do you offer after my puppy comes home?', a: 'We are available to answer questions after your puppy arrives home. Every puppy comes with a detailed care guide covering nutrition, health, and breed-specific advice.' },
      { q: 'What should I prepare before my puppy arrives?', a: 'We recommend having a comfortable sleeping area, appropriate food (we provide a starter sample and recommendations), water bowls, a collar and leash, and a veterinary appointment scheduled.' },
      { q: 'My puppy seems nervous — is that normal?', a: 'Yes — some adjustment time is completely normal. A new home is a big change. Give your puppy a quiet, comfortable space and allow them to settle at their own pace. Contact us if you have concerns.' },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 text-left gap-4"
        aria-expanded={open}
      >
        <span className="font-display font-600 text-foreground text-sm sm:text-base">{q}</span>
        {open ? <ChevronUp size={16} className="text-accent flex-shrink-0" /> : <ChevronDown size={16} className="text-muted-foreground flex-shrink-0" />}
      </button>
      {open && (
        <div className="pb-4 pr-8">
          <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = FAQ_CATEGORIES.map((cat) => ({
    ...cat,
    faqs: cat.faqs.filter(
      (faq) =>
        !search ||
        faq.q.toLowerCase().includes(search.toLowerCase()) ||
        faq.a.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((cat) => cat.faqs.length > 0 && (!activeCategory || cat.category === activeCategory));

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
              <span className="text-foreground font-500">FAQ</span>
            </nav>
            <div className="max-w-2xl">
              <p className="text-xs font-display font-600 tracking-widest uppercase text-accent mb-3">Help Center</p>
              <h1 className="font-display font-800 text-4xl lg:text-5xl text-foreground leading-tight mb-4">Frequently Asked Questions</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">Find answers to common questions about our puppies, the application process, reservations, delivery, and more.</p>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* Search */}
          <div className="relative max-w-lg mb-8">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-field pl-11 py-3 text-base w-full"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-display font-600 border transition-colors ${!activeCategory ? 'bg-foreground text-white border-foreground' : 'bg-white text-muted-foreground border-border hover:border-foreground hover:text-foreground'}`}
            >
              All Topics
            </button>
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(activeCategory === cat.category ? null : cat.category)}
                className={`px-4 py-2 rounded-full text-sm font-display font-600 border transition-colors ${activeCategory === cat.category ? 'bg-foreground text-white border-foreground' : 'bg-white text-muted-foreground border-border hover:border-foreground hover:text-foreground'}`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* FAQ Sections */}
          {filtered.length > 0 ? (
            <div className="space-y-8 max-w-3xl">
              {filtered.map((cat) => (
                <div key={cat.category}>
                  <h2 className="font-display font-800 text-xl text-foreground mb-4">{cat.category}</h2>
                  <div className="bg-white border border-border rounded-2xl px-6 sm:px-8">
                    {cat.faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="font-display font-700 text-xl text-foreground mb-2">No results found</p>
              <p className="text-muted-foreground mb-6">Try a different search term or browse all categories.</p>
              <button onClick={() => setSearch('')} className="btn-outline text-sm px-5 py-2.5">Clear Search</button>
            </div>
          )}

          {/* Still Have Questions */}
          <div className="mt-16 bg-secondary border border-border rounded-2xl p-8 sm:p-12 text-center max-w-3xl">
            <h2 className="font-display font-800 text-2xl text-foreground mb-3">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">We are happy to help. Reach out and we will get back to you as soon as possible.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-accent">Contact Us</Link>
              <Link href="/available-puppies" className="btn-outline">
                <Heart size={14} />
                View Puppies
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
