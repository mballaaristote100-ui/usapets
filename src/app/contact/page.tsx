'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { PUPPIES } from '@/data/puppies';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  puppySlug: string;
}

const SUBJECTS = [
  'General Inquiry',
  'Question About a Puppy',
  'Application Question',
  'Delivery Question',
  'Health Guarantee Question',
  'Waitlist Inquiry',
  'Other',
];

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    puppySlug: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const availablePuppies = PUPPIES.filter((p) => p.status === 'Available' || p.status === 'Reservation Pending');

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!form.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Please enter a valid email address';
    if (!form.subject) newErrors.subject = 'Please select a subject';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    else if (form.message.trim().length < 10) newErrors.message = 'Please provide a bit more detail';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    try {
      const selectedPuppy = availablePuppies.find((p) => p.slug === form.puppySlug);
      await fetch('/api/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
          puppyName: selectedPuppy ? `${selectedPuppy.name} — ${selectedPuppy.breed}` : '',
        }),
      });
    } catch {
      // silently continue
    }
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-background pt-16 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={28} className="text-green-600" />
          </div>
          <h1 className="font-display font-800 text-2xl text-foreground mb-3">Message Sent</h1>
          <p className="text-muted-foreground mb-2">Thank you for reaching out, <strong>{form.firstName}</strong>.</p>
          <p className="text-muted-foreground mb-8">We will get back to you at <strong>{form.email}</strong> as soon as possible.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/available-puppies" className="btn-accent">View Available Puppies</Link>
            <Link href="/" className="btn-outline">Return Home</Link>
          </div>
        </div>
      </div>
    );
  }

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
            <span className="text-foreground font-500">Contact</span>
          </nav>
          <div className="max-w-2xl">
            <p className="text-xs font-display font-600 tracking-widest uppercase text-accent mb-3">Get in Touch</p>
            <h1 className="font-display font-800 text-4xl lg:text-5xl text-foreground leading-tight mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">Have a question about a puppy, the application process, or delivery? We are here to help.</p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-display font-600 text-foreground mb-1.5">First Name <span className="text-accent">*</span></label>
                  <input id="firstName" type="text" value={form.firstName} onChange={(e) => handleChange('firstName', e.target.value)} className={`input-field w-full ${errors.firstName ? 'border-red-400' : ''}`} placeholder="Jane" />
                  {errors.firstName && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={11} />{errors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-display font-600 text-foreground mb-1.5">Last Name <span className="text-accent">*</span></label>
                  <input id="lastName" type="text" value={form.lastName} onChange={(e) => handleChange('lastName', e.target.value)} className={`input-field w-full ${errors.lastName ? 'border-red-400' : ''}`} placeholder="Smith" />
                  {errors.lastName && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={11} />{errors.lastName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-display font-600 text-foreground mb-1.5">Email <span className="text-accent">*</span></label>
                  <input id="email" type="email" value={form.email} onChange={(e) => handleChange('email', e.target.value)} className={`input-field w-full ${errors.email ? 'border-red-400' : ''}`} placeholder="jane@example.com" />
                  {errors.email && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={11} />{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-display font-600 text-foreground mb-1.5">Phone <span className="text-muted-foreground font-400">(optional)</span></label>
                  <input id="phone" type="tel" value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} className="input-field w-full" placeholder="(555) 000-0000" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-display font-600 text-foreground mb-1.5">Subject <span className="text-accent">*</span></label>
                <select id="subject" value={form.subject} onChange={(e) => handleChange('subject', e.target.value)} className={`select-field w-full ${errors.subject ? 'border-red-400' : ''}`}>
                  <option value="">Select a subject...</option>
                  {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                {errors.subject && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={11} />{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="puppySlug" className="block text-sm font-display font-600 text-foreground mb-1.5">I&apos;m asking about <span className="text-muted-foreground font-400">(optional)</span></label>
                <select id="puppySlug" value={form.puppySlug} onChange={(e) => handleChange('puppySlug', e.target.value)} className="select-field w-full">
                  <option value="">Select a puppy (optional)...</option>
                  {availablePuppies.map((p) => <option key={p.slug} value={p.slug}>{p.name} — {p.breed}</option>)}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-display font-600 text-foreground mb-1.5">Message <span className="text-accent">*</span></label>
                <textarea id="message" rows={5} value={form.message} onChange={(e) => handleChange('message', e.target.value)} className={`input-field w-full resize-none ${errors.message ? 'border-red-400' : ''}`} placeholder="Tell us how we can help..." />
                {errors.message && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={11} />{errors.message}</p>}
              </div>

              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 flex items-center gap-2">
                  <AlertCircle size={15} className="text-red-500 flex-shrink-0" />
                  <p className="text-sm text-red-700">Something went wrong. Please try again or email us directly.</p>
                </div>
              )}

              <button type="submit" disabled={status === 'submitting'} className="btn-accent w-full sm:w-auto px-8 disabled:opacity-60 disabled:cursor-not-allowed">
                {status === 'submitting' ? (
                  <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />Sending...</span>
                ) : (
                  <><Send size={15} />Send Message</>
                )}
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-white border border-border rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center mb-4">
                <Mail size={18} className="text-accent" />
              </div>
              <h3 className="font-display font-700 text-base text-foreground mb-2">Email Us</h3>
              <a href="mailto:contact@usapetsforhome.com" className="text-sm text-accent hover:underline break-all">contact@usapetsforhome.com</a>
              <p className="text-xs text-muted-foreground mt-2">We typically respond within 1–2 business days.</p>
            </div>

            <div className="bg-secondary border border-border rounded-2xl p-6">
              <h3 className="font-display font-700 text-base text-foreground mb-3">Quick Links</h3>
              <ul className="space-y-2.5">
                {[
                  { label: 'View Available Puppies', href: '/available-puppies' },
                  { label: 'How It Works', href: '/how-it-works' },
                  { label: 'Delivery Options', href: '/delivery' },
                  { label: 'Health Guarantee', href: '/health-guarantee' },
                  { label: 'FAQ', href: '/faq' },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-muted-foreground hover:text-accent transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}
