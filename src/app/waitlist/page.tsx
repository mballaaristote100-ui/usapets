'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, CheckCircle, AlertCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const US_STATES = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];

const BREEDS = ['Teacup Poodle', 'Yorkie', 'Goldendoodle', 'French Bulldog', 'English Bulldog', 'No Preference'];
const TIMEFRAMES = ['As soon as possible', 'Within 3 months', '3–6 months', '6–12 months', 'Just exploring'];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  state: string;
  preferredBreed: string;
  preferredGender: string;
  desiredTimeframe: string;
  comments: string;
}

export default function WaitlistPage() {
  const [form, setForm] = useState<FormData>({
    firstName: '', lastName: '', email: '', phone: '', state: '',
    preferredBreed: '', preferredGender: '', desiredTimeframe: '', comments: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.firstName.trim()) e.firstName = 'Required';
    if (!form.lastName.trim()) e.lastName = 'Required';
    if (!form.email.trim()) e.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.phone.trim()) e.phone = 'Required';
    if (!form.state) e.state = 'Required';
    if (!form.preferredBreed) e.preferredBreed = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    try {
      await fetch('/api/send-waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          state: form.state,
          preferredBreed: form.preferredBreed,
          preferredGender: form.preferredGender,
          desiredTimeframe: form.desiredTimeframe,
          comments: form.comments,
        }),
      });
    } catch {
      // silently continue
    }
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-background pt-16 flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={28} className="text-green-600" />
            </div>
            <h1 className="font-display font-800 text-2xl text-foreground mb-3">You&apos;re on the Waitlist</h1>
            <p className="text-muted-foreground mb-3">Thank you, <strong>{form.firstName}</strong>. We have added you to our waitlist.</p>
            <p className="text-muted-foreground mb-8 text-sm">We will reach out at <strong>{form.email}</strong> when a puppy matching your preferences becomes available. Joining the waitlist does not guarantee a puppy.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/available-puppies" className="btn-accent">View Available Puppies</Link>
              <Link href="/" className="btn-outline">Return Home</Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-16">
        <div className="bg-white border-b border-border py-12 lg:py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              <span>/</span>
              <span className="text-foreground font-500">Waitlist</span>
            </nav>
            <div className="max-w-2xl">
              <p className="text-xs font-display font-600 tracking-widest uppercase text-accent mb-3">Stay in the Loop</p>
              <h1 className="font-display font-800 text-4xl lg:text-5xl text-foreground leading-tight mb-4">Join the Waitlist</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">Don&apos;t see the right puppy available right now? Join our waitlist and we will notify you when a puppy matching your preferences becomes available.</p>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Notice */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-8 flex items-start gap-3">
                <AlertCircle size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800">Joining the waitlist does not guarantee a puppy or reserve a specific puppy. We will contact you when a matching puppy becomes available.</p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-display font-600 text-foreground mb-1.5">First Name <span className="text-accent">*</span></label>
                    <input type="text" value={form.firstName} onChange={(e) => handleChange('firstName', e.target.value)} className={`input-field w-full ${errors.firstName ? 'border-red-400' : ''}`} placeholder="Jane" />
                    {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-display font-600 text-foreground mb-1.5">Last Name <span className="text-accent">*</span></label>
                    <input type="text" value={form.lastName} onChange={(e) => handleChange('lastName', e.target.value)} className={`input-field w-full ${errors.lastName ? 'border-red-400' : ''}`} placeholder="Smith" />
                    {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-display font-600 text-foreground mb-1.5">Email <span className="text-accent">*</span></label>
                    <input type="email" value={form.email} onChange={(e) => handleChange('email', e.target.value)} className={`input-field w-full ${errors.email ? 'border-red-400' : ''}`} placeholder="jane@example.com" />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-display font-600 text-foreground mb-1.5">Phone <span className="text-accent">*</span></label>
                    <input type="tel" value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} className={`input-field w-full ${errors.phone ? 'border-red-400' : ''}`} placeholder="(555) 000-0000" />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-display font-600 text-foreground mb-1.5">State <span className="text-accent">*</span></label>
                  <select value={form.state} onChange={(e) => handleChange('state', e.target.value)} className={`select-field w-full ${errors.state ? 'border-red-400' : ''}`}>
                    <option value="">Select your state...</option>
                    {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.state && <p className="text-xs text-red-500 mt-1">{errors.state}</p>}
                </div>
                <div>
                  <label className="block text-sm font-display font-600 text-foreground mb-1.5">Preferred Breed <span className="text-accent">*</span></label>
                  <select value={form.preferredBreed} onChange={(e) => handleChange('preferredBreed', e.target.value)} className={`select-field w-full ${errors.preferredBreed ? 'border-red-400' : ''}`}>
                    <option value="">Select a breed...</option>
                    {BREEDS.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                  {errors.preferredBreed && <p className="text-xs text-red-500 mt-1">{errors.preferredBreed}</p>}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-display font-600 text-foreground mb-1.5">Preferred Gender</label>
                    <select value={form.preferredGender} onChange={(e) => handleChange('preferredGender', e.target.value)} className="select-field w-full">
                      <option value="">No preference</option>
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-display font-600 text-foreground mb-1.5">Desired Timeframe</label>
                    <select value={form.desiredTimeframe} onChange={(e) => handleChange('desiredTimeframe', e.target.value)} className="select-field w-full">
                      <option value="">Select...</option>
                      {TIMEFRAMES.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-display font-600 text-foreground mb-1.5">Additional Comments</label>
                  <textarea rows={4} value={form.comments} onChange={(e) => handleChange('comments', e.target.value)} className="input-field w-full resize-none" placeholder="Any specific preferences or questions..." />
                </div>
                <button type="submit" disabled={status === 'submitting'} className="btn-accent w-full sm:w-auto px-8 disabled:opacity-60">
                  {status === 'submitting' ? <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />Joining...</span> : <><Heart size={15} />Join the Waitlist</>}
                </button>
              </form>
            </div>

            <div className="space-y-5">
              <div className="bg-white border border-border rounded-2xl p-6">
                <h3 className="font-display font-700 text-base text-foreground mb-4">How the Waitlist Works</h3>
                <ul className="space-y-3">
                  {[
                    'Fill out the form with your preferences',
                    'We add you to our waitlist',
                    'When a matching puppy becomes available, we contact you',
                    'You can then submit a full application',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-accent-light text-accent font-display font-700 text-xs flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-secondary border border-border rounded-2xl p-6">
                <p className="text-sm text-muted-foreground leading-relaxed">Joining the waitlist is free and does not obligate you to purchase a puppy. We will never share your information with third parties.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
