'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { PUPPIES } from '@/data/puppies';
import { CheckCircle, AlertCircle, ChevronRight, ChevronLeft, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const US_STATES = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];

interface Step1 { firstName: string; lastName: string; email: string; phone: string; city: string; state: string; zip: string; }
interface Step2 { residenceType: string; ownsOrRents: string; hasPets: string; petDetails: string; dogExperience: string; hasChildren: string; }
interface Step3 { deliveryMethod: string; desiredTiming: string; comments: string; }

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={11} />{msg}</p>;
}

function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {Array.from({ length: total }).map((_, i) => (
        <React.Fragment key={i}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-display font-700 transition-colors ${i < current ? 'bg-accent text-white' : i === current ? 'bg-foreground text-white' : 'bg-muted text-muted-foreground'}`}>
            {i < current ? <CheckCircle size={16} /> : i + 1}
          </div>
          {i < total - 1 && <div className={`flex-1 h-0.5 ${i < current ? 'bg-accent' : 'bg-border'}`} />}
        </React.Fragment>
      ))}
    </div>
  );
}

function ApplyContent() {
  const searchParams = useSearchParams();
  const puppySlug = searchParams.get('puppy') || '';
  const selectedPuppy = PUPPIES.find((p) => p.slug === puppySlug);

  const [step, setStep] = useState(0);
  const [step1, setStep1] = useState<Step1>({ firstName: '', lastName: '', email: '', phone: '', city: '', state: '', zip: '' });
  const [step2, setStep2] = useState<Step2>({ residenceType: '', ownsOrRents: '', hasPets: '', petDetails: '', dogExperience: '', hasChildren: '' });
  const [step3, setStep3] = useState<Step3>({ deliveryMethod: '', desiredTiming: '', comments: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refNumber] = useState(() => `APP-${Math.floor(100000 + Math.random() * 900000)}`);

  const validateStep1 = () => {
    const e: Record<string, string> = {};
    if (!step1.firstName.trim()) e.firstName = 'Required';
    if (!step1.lastName.trim()) e.lastName = 'Required';
    if (!step1.email.trim()) e.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(step1.email)) e.email = 'Invalid email';
    if (!step1.phone.trim()) e.phone = 'Required';
    if (!step1.city.trim()) e.city = 'Required';
    if (!step1.state) e.state = 'Required';
    if (!step1.zip.trim()) e.zip = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep2 = () => {
    const e: Record<string, string> = {};
    if (!step2.residenceType) e.residenceType = 'Required';
    if (!step2.ownsOrRents) e.ownsOrRents = 'Required';
    if (!step2.hasPets) e.hasPets = 'Required';
    if (!step2.dogExperience) e.dogExperience = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateStep3 = () => {
    const e: Record<string, string> = {};
    if (!step3.deliveryMethod) e.deliveryMethod = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (step === 0 && !validateStep1()) return;
    if (step === 1 && !validateStep2()) return;
    if (step === 2 && !validateStep3()) return;
    setStep((s) => s + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const back = () => { setStep((s) => s - 1); setErrors({}); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  const handleSubmit = async () => {
    if (!agreed) { setErrors({ agreed: 'Please confirm your information is accurate' }); return; }
    setSubmitting(true);
    try {
      await fetch('/api/send-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          step1,
          step2,
          step3,
          puppyName: selectedPuppy?.name || '',
          puppyBreed: selectedPuppy?.breed || '',
          refNumber,
        }),
      });
    } catch {
      // silently continue — show success regardless
    }
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background pt-16 flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center">
          <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={28} className="text-green-600" />
          </div>
          <h1 className="font-display font-800 text-3xl text-foreground mb-3">Application Received</h1>
          <p className="text-muted-foreground mb-6 leading-relaxed">Thank you, <strong>{step1.firstName}</strong>. We have received your application and will review it carefully. We will be in touch at <strong>{step1.email}</strong>.</p>
          <div className="bg-secondary border border-border rounded-xl p-5 mb-8 text-left space-y-3">
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Reference Number</span><span className="font-display font-700 text-foreground">{refNumber}</span></div>
            {selectedPuppy && <div className="flex justify-between text-sm"><span className="text-muted-foreground">Puppy Applied For</span><span className="font-display font-700 text-foreground">{selectedPuppy.name}</span></div>}
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Status</span><span className="inline-flex items-center gap-1.5 text-amber-700 font-display font-600"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" />Under Review</span></div>
          </div>
          <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
            You will receive a confirmation email shortly. If you don&apos;t see it, please reach out to our{' '}
            <span className="font-600 text-foreground">live support (live chat)</span> for a quick response.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/available-puppies" className="btn-accent">View More Puppies</Link>
            <Link href="/" className="btn-outline">Return Home</Link>
          </div>
        </div>
      </div>
    );
  }

  const STEP_LABELS = ['Your Information', 'Home & Lifestyle', 'Puppy Preferences', 'Review'];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-16">
      <div className="bg-white border-b border-border py-10 lg:py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground font-500">Apply</span>
          </nav>
          <p className="text-xs font-display font-600 tracking-widest uppercase text-accent mb-2">Buyer Application</p>
          <h1 className="font-display font-800 text-3xl lg:text-4xl text-foreground mb-1">Reserve Your Puppy</h1>
          <p className="text-muted-foreground">Step {step + 1} of 4 — {STEP_LABELS[step]}</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
        <StepIndicator current={step} total={4} />

        {/* Selected Puppy Banner */}
        {selectedPuppy && (
          <div className="flex items-center gap-4 bg-accent-light border border-amber-200 rounded-xl p-4 mb-8">
            <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
              <Image src={selectedPuppy.featuredImage} alt={selectedPuppy.featuredImageAlt} fill className="object-cover" sizes="56px" />
            </div>
            <div>
              <p className="text-xs text-amber-700 font-500 mb-0.5">Applying for</p>
              <p className="font-display font-700 text-foreground">{selectedPuppy.name}</p>
              <p className="text-sm text-muted-foreground">{selectedPuppy.breed} · ${selectedPuppy.price.toLocaleString()}</p>
            </div>
          </div>
        )}

        {/* Step 1 */}
        {step === 0 && (
          <div className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-display font-600 text-foreground mb-1.5">First Name <span className="text-accent">*</span></label>
                <input type="text" value={step1.firstName} onChange={(e) => setStep1((p) => ({ ...p, firstName: e.target.value }))} className={`input-field w-full ${errors.firstName ? 'border-red-400' : ''}`} placeholder="Jane" />
                <FieldError msg={errors.firstName} />
              </div>
              <div>
                <label className="block text-sm font-display font-600 text-foreground mb-1.5">Last Name <span className="text-accent">*</span></label>
                <input type="text" value={step1.lastName} onChange={(e) => setStep1((p) => ({ ...p, lastName: e.target.value }))} className={`input-field w-full ${errors.lastName ? 'border-red-400' : ''}`} placeholder="Smith" />
                <FieldError msg={errors.lastName} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-display font-600 text-foreground mb-1.5">Email <span className="text-accent">*</span></label>
              <input type="email" value={step1.email} onChange={(e) => setStep1((p) => ({ ...p, email: e.target.value }))} className={`input-field w-full ${errors.email ? 'border-red-400' : ''}`} placeholder="jane@example.com" />
              <FieldError msg={errors.email} />
            </div>
            <div>
              <label className="block text-sm font-display font-600 text-foreground mb-1.5">Phone <span className="text-accent">*</span></label>
              <input type="tel" value={step1.phone} onChange={(e) => setStep1((p) => ({ ...p, phone: e.target.value }))} className={`input-field w-full ${errors.phone ? 'border-red-400' : ''}`} placeholder="(555) 000-0000" />
              <FieldError msg={errors.phone} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-display font-600 text-foreground mb-1.5">City <span className="text-accent">*</span></label>
                <input type="text" value={step1.city} onChange={(e) => setStep1((p) => ({ ...p, city: e.target.value }))} className={`input-field w-full ${errors.city ? 'border-red-400' : ''}`} placeholder="Austin" />
                <FieldError msg={errors.city} />
              </div>
              <div>
                <label className="block text-sm font-display font-600 text-foreground mb-1.5">State <span className="text-accent">*</span></label>
                <select value={step1.state} onChange={(e) => setStep1((p) => ({ ...p, state: e.target.value }))} className={`select-field w-full ${errors.state ? 'border-red-400' : ''}`}>
                  <option value="">State</option>
                  {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                <FieldError msg={errors.state} />
              </div>
              <div>
                <label className="block text-sm font-display font-600 text-foreground mb-1.5">ZIP <span className="text-accent">*</span></label>
                <input type="text" value={step1.zip} onChange={(e) => setStep1((p) => ({ ...p, zip: e.target.value }))} className={`input-field w-full ${errors.zip ? 'border-red-400' : ''}`} placeholder="78701" maxLength={10} />
                <FieldError msg={errors.zip} />
              </div>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 1 && (
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-display font-600 text-foreground mb-1.5">Type of Residence <span className="text-accent">*</span></label>
              <select value={step2.residenceType} onChange={(e) => setStep2((p) => ({ ...p, residenceType: e.target.value }))} className={`select-field w-full ${errors.residenceType ? 'border-red-400' : ''}`}>
                <option value="">Select...</option>
                {['House with yard', 'House without yard', 'Apartment', 'Condo', 'Townhouse', 'Other'].map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
              <FieldError msg={errors.residenceType} />
            </div>
            <div>
              <label className="block text-sm font-display font-600 text-foreground mb-1.5">Do you own or rent? <span className="text-accent">*</span></label>
              <select value={step2.ownsOrRents} onChange={(e) => setStep2((p) => ({ ...p, ownsOrRents: e.target.value }))} className={`select-field w-full ${errors.ownsOrRents ? 'border-red-400' : ''}`}>
                <option value="">Select...</option>
                {['Own', 'Rent — pets allowed', 'Rent — checking with landlord', 'Other'].map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
              <FieldError msg={errors.ownsOrRents} />
            </div>
            <div>
              <label className="block text-sm font-display font-600 text-foreground mb-1.5">Do you currently have pets? <span className="text-accent">*</span></label>
              <select value={step2.hasPets} onChange={(e) => setStep2((p) => ({ ...p, hasPets: e.target.value }))} className={`select-field w-full ${errors.hasPets ? 'border-red-400' : ''}`}>
                <option value="">Select...</option>
                {['No', 'Yes — dogs', 'Yes — cats', 'Yes — other pets', 'Yes — multiple types'].map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
              <FieldError msg={errors.hasPets} />
            </div>
            {step2.hasPets && step2.hasPets !== 'No' && (
              <div>
                <label className="block text-sm font-display font-600 text-foreground mb-1.5">Tell us about your current pets</label>
                <textarea rows={3} value={step2.petDetails} onChange={(e) => setStep2((p) => ({ ...p, petDetails: e.target.value }))} className="input-field w-full resize-none" placeholder="Breed, age, temperament..." />
              </div>
            )}
            <div>
              <label className="block text-sm font-display font-600 text-foreground mb-1.5">Previous dog experience <span className="text-accent">*</span></label>
              <select value={step2.dogExperience} onChange={(e) => setStep2((p) => ({ ...p, dogExperience: e.target.value }))} className={`select-field w-full ${errors.dogExperience ? 'border-red-400' : ''}`}>
                <option value="">Select...</option>
                {['First-time dog owner', 'Some experience', 'Experienced dog owner', 'Lifelong dog owner'].map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
              <FieldError msg={errors.dogExperience} />
            </div>
            <div>
              <label className="block text-sm font-display font-600 text-foreground mb-1.5">Children in household</label>
              <select value={step2.hasChildren} onChange={(e) => setStep2((p) => ({ ...p, hasChildren: e.target.value }))} className="select-field w-full">
                <option value="">Prefer not to say</option>
                {['No children', 'Children under 5', 'Children 5–12', 'Teenagers', 'Mixed ages'].map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 2 && (
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-display font-600 text-foreground mb-1.5">Preferred delivery/pickup method <span className="text-accent">*</span></label>
              <select value={step3.deliveryMethod} onChange={(e) => setStep3((p) => ({ ...p, deliveryMethod: e.target.value }))} className={`select-field w-full ${errors.deliveryMethod ? 'border-red-400' : ''}`}>
                <option value="">Select...</option>
                {['Ground transportation', 'Puppy nanny / flight delivery', 'Not sure yet — will discuss'].map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
              <FieldError msg={errors.deliveryMethod} />
            </div>
            <div>
              <label className="block text-sm font-display font-600 text-foreground mb-1.5">Desired timing</label>
              <select value={step3.desiredTiming} onChange={(e) => setStep3((p) => ({ ...p, desiredTiming: e.target.value }))} className="select-field w-full">
                <option value="">Select...</option>
                {['As soon as possible', 'Within 1 month', '1–3 months', '3–6 months', 'Flexible'].map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-display font-600 text-foreground mb-1.5">Additional comments or questions</label>
              <textarea rows={4} value={step3.comments} onChange={(e) => setStep3((p) => ({ ...p, comments: e.target.value }))} className="input-field w-full resize-none" placeholder="Anything else you'd like us to know..." />
            </div>
          </div>
        )}

        {/* Step 4 — Review */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="bg-white border border-border rounded-xl p-5 space-y-3">
              <h3 className="font-display font-700 text-base text-foreground">Your Information</h3>
              {[
                ['Name', `${step1.firstName} ${step1.lastName}`],
                ['Email', step1.email],
                ['Phone', step1.phone],
                ['Location', `${step1.city}, ${step1.state} ${step1.zip}`],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between text-sm border-b border-border last:border-0 pb-2 last:pb-0">
                  <span className="text-muted-foreground">{label}</span>
                  <span className="font-500 text-foreground text-right max-w-[60%]">{value}</span>
                </div>
              ))}
            </div>
            <div className="bg-white border border-border rounded-xl p-5 space-y-3">
              <h3 className="font-display font-700 text-base text-foreground">Home & Lifestyle</h3>
              {[
                ['Residence', step2.residenceType],
                ['Ownership', step2.ownsOrRents],
                ['Current Pets', step2.hasPets],
                ['Dog Experience', step2.dogExperience],
              ].filter(([, v]) => v).map(([label, value]) => (
                <div key={label} className="flex justify-between text-sm border-b border-border last:border-0 pb-2 last:pb-0">
                  <span className="text-muted-foreground">{label}</span>
                  <span className="font-500 text-foreground text-right max-w-[60%]">{value}</span>
                </div>
              ))}
            </div>
            <div className="bg-white border border-border rounded-xl p-5 space-y-3">
              <h3 className="font-display font-700 text-base text-foreground">Puppy Preferences</h3>
              {selectedPuppy && (
                <div className="flex items-center gap-3 pb-3 border-b border-border">
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                    <Image src={selectedPuppy.featuredImage} alt={selectedPuppy.featuredImageAlt} fill className="object-cover" sizes="40px" />
                  </div>
                  <div>
                    <p className="font-display font-700 text-sm text-foreground">{selectedPuppy.name}</p>
                    <p className="text-xs text-muted-foreground">{selectedPuppy.breed}</p>
                  </div>
                </div>
              )}
              {[
                ['Delivery Method', step3.deliveryMethod],
                ['Timing', step3.desiredTiming],
              ].filter(([, v]) => v).map(([label, value]) => (
                <div key={label} className="flex justify-between text-sm border-b border-border last:border-0 pb-2 last:pb-0">
                  <span className="text-muted-foreground">{label}</span>
                  <span className="font-500 text-foreground text-right max-w-[60%]">{value}</span>
                </div>
              ))}
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={agreed} onChange={(e) => { setAgreed(e.target.checked); if (e.target.checked) setErrors((p) => ({ ...p, agreed: undefined as unknown as string })); }} className="mt-0.5 w-4 h-4 accent-amber-600 flex-shrink-0" />
              <span className="text-sm text-muted-foreground leading-relaxed">I confirm that the information provided in this application is accurate and complete to the best of my knowledge.</span>
            </label>
            {errors.agreed && <FieldError msg={errors.agreed} />}
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
          {step > 0 ? (
            <button onClick={back} className="btn-outline text-sm px-5 py-2.5">
              <ChevronLeft size={15} />Back
            </button>
          ) : (
            <Link href="/available-puppies" className="btn-outline text-sm px-5 py-2.5">Cancel</Link>
          )}
          {step < 3 ? (
            <button onClick={next} className="btn-accent text-sm px-6 py-2.5">
              Continue <ChevronRight size={15} />
            </button>
          ) : (
            <button onClick={handleSubmit} disabled={submitting} className="btn-accent text-sm px-6 py-2.5 disabled:opacity-60">
              {submitting ? <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />Submitting...</span> : <><Heart size={14} />Submit Application</>}
            </button>
          )}
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background pt-16 flex items-center justify-center"><div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" /></div>}>
      <ApplyContent />
    </Suspense>
  );
}
