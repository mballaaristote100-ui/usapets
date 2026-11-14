'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { type Puppy, getPuppyAge, formatPrice } from '@/data/puppies';
import { Heart, Mail, ShieldCheck, Syringe, Cpu, CheckCircle2, Share2, Check } from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


interface Props {
  puppy: Puppy;
}

function StatusBadge({ status }: { status: Puppy['status'] }) {
  const map = {
    Available: { cls: 'status-available', dot: 'bg-green-500', label: 'Available' },
    'Reservation Pending': { cls: 'status-pending', dot: 'bg-amber-500', label: 'Reservation Pending' },
    Reserved: { cls: 'status-reserved', dot: 'bg-purple-500', label: 'Reserved' },
    'Found My Home': { cls: 'status-found', dot: 'bg-slate-400', label: 'Found My Home ❤️' },
  };
  const s = map[status];
  return (
    <span className={`health-badge ${s.cls} font-display font-600 text-sm px-3 py-1`}>
      <span className={`w-2 h-2 rounded-full ${s.dot} flex-shrink-0`} />
      {s.label}
    </span>
  );
}

export default function PuppyInfoPanel({ puppy }: Props) {
  const [copied, setCopied] = useState(false);
  const isAvailable = puppy.status === 'Available';

  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Status + Share */}
      <div className="flex items-center justify-between">
        <StatusBadge status={puppy.status} />
        <button
          onClick={handleShare}
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors font-500"
          aria-label="Share this puppy page"
        >
          {copied ? <Check size={14} className="text-green-600" /> : <Share2 size={14} />}
          {copied ? 'Copied!' : 'Share'}
        </button>
      </div>

      {/* Name + Breed */}
      <div>
        <h1 className="font-display font-800 text-5xl text-foreground leading-tight mb-1">
          {puppy.name}
        </h1>
        <p className="text-muted-foreground font-500 text-lg">{puppy.breed}</p>
      </div>

      {/* Price */}
      {isAvailable && (
        <div className="flex items-end gap-4 pb-5 border-b border-border">
          <div>
            <p className="text-xs text-muted-foreground font-500 mb-0.5">Asking Price</p>
            <p className="font-display font-800 text-4xl text-foreground">{formatPrice(puppy.price)}</p>
          </div>
          <div className="pb-1">
            <p className="text-xs text-muted-foreground font-500 mb-0.5">Reservation Deposit</p>
            <p className="font-display font-600 text-xl text-muted-foreground">{formatPrice(puppy.depositAmount)}</p>
          </div>
        </div>
      )}

      {/* Key Details Grid */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: 'Gender', value: puppy.gender },
          { label: 'Age', value: getPuppyAge(puppy.dateOfBirth) },
          { label: 'Color', value: puppy.color },
          { label: 'Date of Birth', value: new Date(puppy.dateOfBirth).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) },
          { label: 'Expected Adult Size', value: puppy.expectedAdultSize },
          { label: 'Delivery', value: puppy.deliveryAvailable ? 'Available Nationwide' : 'Pickup Only' },
        ].map((detail) => (
          <div key={`detail-${detail.label}`} className="bg-muted/50 rounded-xl p-3.5 border border-border">
            <p className="text-xs text-muted-foreground font-500 mb-0.5 uppercase tracking-wide">{detail.label}</p>
            <p className="font-display font-600 text-sm text-foreground">{detail.value}</p>
          </div>
        ))}
      </div>

      {/* Personality Tags */}
      {puppy.personality.length > 0 && (
        <div>
          <p className="text-xs text-muted-foreground font-500 uppercase tracking-wide mb-2">Personality</p>
          <div className="flex flex-wrap gap-2">
            {puppy.personality.map((trait) => (
              <span
                key={`trait-${trait}`}
                className="px-3 py-1.5 bg-accent-light text-accent rounded-full text-sm font-display font-600 border border-amber-200"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Quick Health Indicators */}
      <div className="bg-green-50 rounded-xl p-4 border border-green-100">
        <p className="text-xs text-green-700 font-display font-600 uppercase tracking-wide mb-3">Health Status</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: 'Vet Checked', value: puppy.vetChecked, icon: ShieldCheck },
            { label: 'Vaccinated', value: !!puppy.vaccinationStatus, icon: Syringe },
            { label: 'Dewormed', value: !!puppy.dewormingStatus, icon: CheckCircle2 },
            { label: 'Microchipped', value: puppy.microchipStatus, icon: Cpu },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={`health-${item.label}`}
                className={`flex items-center gap-2 text-sm font-500 ${item.value ? 'text-green-700' : 'text-muted-foreground'}`}
              >
                <Icon size={14} className={item.value ? 'text-green-600' : 'text-muted-foreground/50'} />
                {item.label}
                {item.value ? (
                  <span className="ml-auto text-green-600 text-xs">✓</span>
                ) : (
                  <span className="ml-auto text-muted-foreground/50 text-xs">—</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* CTAs */}
      <div className="space-y-3 hidden lg:block">
        {isAvailable ? (
          <>
            <Link
              href={`/apply?puppy=${puppy.slug}`}
              className="btn-accent w-full justify-center text-base py-3.5"
            >
              <Heart size={17} />
              Apply to Reserve {puppy.name}
            </Link>
            <a
              href={`mailto:contact@usapetsforhome.com?subject=Question about ${puppy.name}&body=Hi, I have a question about ${puppy.name} the ${puppy.breed}.`}
              className="btn-outline w-full justify-center text-base py-3.5"
            >
              <Mail size={17} />
              Ask About {puppy.name}
            </a>
          </>
        ) : puppy.status === 'Found My Home' ? (
          <>
            <p className="text-sm text-muted-foreground text-center bg-muted/50 rounded-xl p-4 border border-border">
              {puppy.name} has found their forever home. 🏠
            </p>
            <Link href="/available-puppies" className="btn-primary w-full justify-center text-base py-3.5">
              Find Similar Puppies
            </Link>
          </>
        ) : (
          <>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
              <p className="font-display font-600 text-sm text-amber-800 mb-1">
                {puppy.status === 'Reserved' ? 'This puppy has been reserved' : 'A reservation is pending for this puppy'}
              </p>
              <p className="text-xs text-amber-700">
                Join our waitlist to be notified when a similar puppy becomes available.
              </p>
            </div>
            <Link href="/available-puppies" className="btn-primary w-full justify-center text-base py-3.5">
              Find Similar Puppies
            </Link>
            <Link href="/waitlist" className="btn-outline w-full justify-center text-base py-3.5">
              Join the Waitlist
            </Link>
          </>
        )}
      </div>

      {/* Contact note */}
      <p className="text-xs text-muted-foreground text-center hidden lg:block">
        Questions?{' '}
        <a href="mailto:contact@usapetsforhome.com" className="text-accent hover:underline font-500">
          contact@usapetsforhome.com
        </a>
      </p>
    </div>
  );
}