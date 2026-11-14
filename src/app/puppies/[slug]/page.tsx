'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PUPPIES, type Puppy } from '@/data/puppies';
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Shield, CheckCircle, XCircle, Truck, Calendar, Ruler, Palette, User, ArrowRight } from 'lucide-react';
import PuppyCard from '@/components/PuppyCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useParams } from 'react-router-dom';



function getAge(dob: string): string {
  const birth = new Date(dob);
  const now = new Date();
  const weeks = Math.floor((now.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24 * 7));
  if (weeks < 16) return `${weeks} weeks old`;
  const months = Math.floor(weeks / 4.33);
  return `${months} months old`;
}

function StatusBadge({ status }: { status: Puppy['status'] }) {
  const map = {
    Available: 'bg-green-50 text-green-700 border-green-200',
    'Reservation Pending': 'bg-amber-50 text-amber-700 border-amber-200',
    Reserved: 'bg-purple-50 text-purple-700 border-purple-200',
    'Found My Home': 'bg-slate-50 text-slate-600 border-slate-200',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-display font-600 border ${map[status]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${status === 'Available' ? 'bg-green-500' : status === 'Reservation Pending' ? 'bg-amber-500' : status === 'Reserved' ? 'bg-purple-500' : 'bg-slate-400'}`} />
      {status}
    </span>
  );
}

function HealthIndicator({ label, value }: { label: string; value: boolean | string }) {
  const isPositive = value === true || (typeof value === 'string' && value.toLowerCase() !== 'not completed' && value !== '');
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-border last:border-0">
      <span className="text-sm text-muted-foreground font-500">{label}</span>
      <div className="flex items-center gap-1.5">
        {typeof value === 'boolean' ? (
          value ? <CheckCircle size={15} className="text-green-600" /> : <XCircle size={15} className="text-slate-400" />
        ) : (
          <span className="text-sm font-display font-600 text-foreground">{value}</span>
        )}
      </div>
    </div>
  );
}

export default function PuppyDetailPage() {
  const params = useParams ? useParams() : null;
  const puppy = PUPPIES.find((p) => p.slug === params?.slug);
  const [activeImage, setActiveImage] = useState(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowStickyBar(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!puppy) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="text-6xl mb-6">🐾</div>
        <h1 className="font-display font-800 text-3xl text-foreground mb-3">Puppy Not Found</h1>
        <p className="text-muted-foreground mb-8 max-w-sm">This puppy may have already found their forever home.</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/available-puppies" className="btn-accent">View Available Puppies</Link>
          <Link href="/" className="btn-outline">Return Home</Link>
        </div>
      </div>
    );
  }

  const similarPuppies = PUPPIES.filter((p) => p.breedSlug === puppy.breedSlug && p.slug !== puppy.slug).slice(0, 3);
  const allImages = puppy.galleryImages.length > 0 ? puppy.galleryImages : [{ src: puppy.featuredImage, alt: puppy.featuredImageAlt }];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-16">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-border">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              <span>/</span>
              <Link href="/available-puppies" className="hover:text-accent transition-colors">Available Puppies</Link>
              <span>/</span>
              <span className="text-foreground font-500">{puppy.name}</span>
            </nav>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left — Gallery */}
            <div>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted shadow-warm-lg">
                <Image
                  src={allImages[activeImage]?.src}
                  alt={allImages[activeImage]?.alt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={() => setActiveImage((prev) => (prev - 1 + allImages.length) % allImages.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:bg-white transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={() => setActiveImage((prev) => (prev + 1) % allImages.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:bg-white transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                )}
              </div>
              {allImages.length > 1 && (
                <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                  {allImages.map((img, i) => (
                    <button
                      key={`thumb-${i}`}
                      onClick={() => setActiveImage(i)}
                      className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${i === activeImage ? 'border-accent' : 'border-transparent opacity-70 hover:opacity-100'}`}
                      aria-label={`View image ${i + 1}`}
                    >
                      <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="64px" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right — Info */}
            <div>
              <div className="mb-3">
                <StatusBadge status={puppy.status} />
              </div>
              <h1 className="font-display font-800 text-4xl lg:text-5xl text-foreground mb-1">{puppy.name}</h1>
              <p className="text-lg text-muted-foreground font-500 mb-5">{puppy.breed}</p>

              {/* Quick Details */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { icon: <User size={14} />, label: 'Gender', value: puppy.gender },
                  { icon: <Calendar size={14} />, label: 'Age', value: getAge(puppy.dateOfBirth) },
                  { icon: <Palette size={14} />, label: 'Color', value: puppy.color },
                  { icon: <Ruler size={14} />, label: 'Adult Size', value: puppy.expectedAdultSize },
                ].map((item) => (
                  <div key={item.label} className="bg-secondary rounded-xl p-3 border border-border">
                    <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
                      {item.icon}
                      <span className="text-xs font-500">{item.label}</span>
                    </div>
                    <p className="font-display font-700 text-sm text-foreground">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="bg-white border border-border rounded-xl p-5 mb-6">
                <div className="flex items-end justify-between mb-3">
                  <div>
                    <p className="text-xs text-muted-foreground font-500 mb-1">Adoption Price</p>
                    <p className="font-display font-800 text-3xl text-foreground">${puppy.price.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground font-500 mb-1">Reservation Deposit</p>
                    <p className="font-display font-700 text-xl text-accent">${puppy.depositAmount.toLocaleString()}</p>
                  </div>
                </div>
                {puppy.status === 'Available' ? (
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <Link href={`/apply?puppy=${puppy.slug}`} className="btn-accent flex-1 justify-center">
                      <Heart size={16} />
                      Apply to Reserve {puppy.name}
                    </Link>
                    <Link href={`/contact?puppy=${puppy.slug}`} className="btn-outline flex-shrink-0">
                      <MessageCircle size={15} />
                      Ask About {puppy.name}
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-2.5">
                    <div className="bg-secondary rounded-lg p-3 text-center">
                      <p className="text-sm font-display font-600 text-muted-foreground">{puppy.status === 'Found My Home' ? `${puppy.name} has found their forever home.` : `${puppy.name} is currently ${puppy.status.toLowerCase()}.`}</p>
                    </div>
                    <Link href="/available-puppies" className="btn-outline w-full justify-center">Find Similar Puppies</Link>
                  </div>
                )}
              </div>

              {/* Delivery */}
              {puppy.deliveryAvailable && (
                <div className="flex items-center gap-2.5 text-sm text-muted-foreground bg-secondary rounded-xl px-4 py-3 border border-border">
                  <Truck size={15} className="text-accent flex-shrink-0" />
                  <span>Nationwide delivery available — <Link href="/delivery" className="text-accent font-500 hover:underline">learn more</Link></span>
                </div>
              )}
            </div>
          </div>

          {/* About Section */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              {/* About */}
              <section>
                <h2 className="font-display font-800 text-2xl text-foreground mb-4">About {puppy.name}</h2>
                <p className="text-muted-foreground leading-relaxed text-base">{puppy.fullDescription}</p>
                {puppy.personality.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-5">
                    {puppy.personality.map((trait) => (
                      <span key={trait} className="px-3 py-1.5 bg-accent-light text-accent font-display font-600 text-sm rounded-full border border-amber-200">
                        {trait}
                      </span>
                    ))}
                  </div>
                )}
              </section>

              {/* Health */}
              <section>
                <h2 className="font-display font-800 text-2xl text-foreground mb-4">Health & Care</h2>
                <div className="bg-white border border-border rounded-xl p-5">
                  <HealthIndicator label="Vet Checked" value={puppy.vetChecked} />
                  <HealthIndicator label="Vaccinations" value={puppy.vaccinationStatus} />
                  <HealthIndicator label="Deworming" value={puppy.dewormingStatus} />
                  <HealthIndicator label="Microchipped" value={puppy.microchipStatus} />
                  <HealthIndicator label="Health Guarantee" value={puppy.healthGuarantee} />
                </div>
              </section>

              {/* Parents */}
              {(puppy.mother || puppy.father) && (
                <section>
                  <h2 className="font-display font-800 text-2xl text-foreground mb-4">Meet the Parents</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[puppy.mother && { ...puppy.mother, role: 'Mother' }, puppy.father && { ...puppy.father, role: 'Father' }].filter(Boolean).map((parent) => (
                      <div key={parent!.role} className="bg-white border border-border rounded-xl p-4 flex items-start gap-4">
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                          <Image src={parent!.image} alt={parent!.imageAlt} fill className="object-cover" sizes="64px" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground font-500 mb-0.5">{parent!.role}</p>
                          <p className="font-display font-700 text-foreground">{parent!.name}</p>
                          <p className="text-sm text-muted-foreground">{parent!.breed}</p>
                          {parent!.description && <p className="text-xs text-muted-foreground mt-1">{parent!.description}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* What Comes With Your Puppy */}
              <section>
                <h2 className="font-display font-800 text-2xl text-foreground mb-4">What Comes With {puppy.name}</h2>
                <div className="bg-white border border-border rounded-xl p-5">
                  <ul className="space-y-3">
                    {puppy.whatComesWithPuppy.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Bringing Home */}
              <section>
                <h2 className="font-display font-800 text-2xl text-foreground mb-4">Bringing {puppy.name} Home</h2>
                <div className="bg-secondary border border-border rounded-xl p-5 space-y-3">
                  {puppy.deliveryAvailable && (
                    <div className="flex items-start gap-3">
                      <Truck size={16} className="text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-display font-600 text-sm text-foreground mb-0.5">Nationwide Delivery</p>
                        <p className="text-sm text-muted-foreground">Safe, comfortable delivery to your door. <Link href="/delivery" className="text-accent hover:underline">View delivery options →</Link></p>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-white border border-border rounded-xl p-5 sticky top-24">
                <div className="flex items-center gap-2 mb-4">
                  <Shield size={16} className="text-accent" />
                  <h3 className="font-display font-700 text-base text-foreground">Our Guarantee</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{puppy.healthGuarantee}. We stand behind every puppy we raise.</p>
                <Link href="/health-guarantee" className="text-sm text-accent font-500 hover:underline flex items-center gap-1">
                  Read our health guarantee <ArrowRight size={13} />
                </Link>
                <div className="mt-5 pt-5 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-3 font-500">Questions about {puppy.name}?</p>
                  <a href="mailto:contact@usapetsforhome.com" className="btn-outline w-full justify-center text-sm py-2.5">
                    <MessageCircle size={14} />
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Similar Puppies */}
          {similarPuppies.length > 0 && (
            <section className="mt-16 pt-12 border-t border-border">
              <div className="flex items-end justify-between mb-8">
                <div>
                  <p className="text-xs font-display font-600 tracking-widest uppercase text-accent mb-2">More {puppy.breed}s</p>
                  <h2 className="font-display font-800 text-2xl text-foreground">Similar Puppies</h2>
                </div>
                <Link href={`/${puppy.breedSlug === 'teacup-poodle' ? 'teacup-poodles' : puppy.breedSlug === 'yorkie' ? 'yorkie-puppies' : puppy.breedSlug === 'goldendoodle' ? 'goldendoodles' : puppy.breedSlug === 'french-bulldog' ? 'french-bulldogs' : 'english-bulldogs'}`} className="text-sm text-accent font-500 hover:underline flex items-center gap-1">
                  View all <ArrowRight size={13} />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {similarPuppies.map((p) => <PuppyCard key={p.id} puppy={p} />)}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Mobile Sticky Bar */}
      {puppy.status === 'Available' && showStickyBar && (
        <div className="lg:hidden sticky-cta-bar safe-area-bottom">
          <div className="flex items-center gap-3">
            <div className="flex-1 min-w-0">
              <p className="font-display font-700 text-sm text-foreground truncate">{puppy.name}</p>
              <p className="text-xs text-muted-foreground">${puppy.price.toLocaleString()} · {puppy.breed}</p>
            </div>
            <Link href={`/apply?puppy=${puppy.slug}`} className="btn-accent text-sm px-5 py-2.5 flex-shrink-0">
              <Heart size={14} />
              Apply to Reserve
            </Link>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
