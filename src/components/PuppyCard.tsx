import React, { memo } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { type Puppy, getPuppyAge, formatPrice } from '@/data/puppies';
import { Heart, ShieldCheck, Syringe, MapPin } from 'lucide-react';

interface PuppyCardProps {
  puppy: Puppy;
}

function StatusBadge({ status }: { status: Puppy['status'] }) {
  const map = {
    Available: { cls: 'status-available', dot: 'bg-green-500', label: 'Available' },
    'Reservation Pending': { cls: 'status-pending', dot: 'bg-amber-500', label: 'Reservation Pending' },
    Reserved: { cls: 'status-reserved', dot: 'bg-purple-500', label: 'Reserved' },
    'Found My Home': { cls: 'status-found', dot: 'bg-slate-400', label: 'Found My Home' },
  };
  const s = map[status];
  return (
    <span className={`health-badge ${s.cls} font-display font-600`}>
      <span className={`w-1.5 h-1.5 rounded-full ${s.dot} flex-shrink-0`} />
      {s.label}
    </span>
  );
}

const PuppyCard = memo(function PuppyCard({ puppy }: PuppyCardProps) {
  const isAvailable = puppy.status === 'Available';
  const isReserved = puppy.status === 'Reserved';
  const isPending = puppy.status === 'Reservation Pending';
  const isFoundHome = puppy.status === 'Found My Home';
  const isGreyscale = isReserved || isPending || isFoundHome;
  const age = getPuppyAge(puppy.dateOfBirth);

  const watermarkLabel = isReserved
    ? 'Reserved'
    : isPending
    ? 'Pending'
    : isFoundHome
    ? 'Found My Home'
    : null;

  return (
    <article className="puppy-card group flex flex-col h-full">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <AppImage
          src={puppy.featuredImage}
          alt={puppy.featuredImageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover transition-transform duration-400 group-hover:scale-105${isGreyscale ? ' grayscale' : ''}`}
        />
        {/* Watermark overlay */}
        {watermarkLabel && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="text-white font-display font-700 tracking-widest uppercase select-none"
              style={{
                transform: 'rotate(-35deg)',
                textShadow: '0 1px 4px rgba(0,0,0,0.5)',
                border: '3px solid rgba(255,255,255,0.75)',
                padding: '6px 18px',
                borderRadius: '4px',
                background: 'rgba(0,0,0,0.28)',
                letterSpacing: '0.2em',
                opacity: 0.92,
                fontSize: isFoundHome ? '1rem' : '1.5rem',
              }}
            >
              {watermarkLabel}
            </div>
          </div>
        )}
        {/* Status overlay */}
        <div className="absolute top-3 left-3">
          <StatusBadge status={puppy.status} />
        </div>
        {/* Gender badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`health-badge font-display font-600 ${
              puppy.gender === 'Female' ? 'bg-pink-50 text-pink-600' : 'bg-blue-50 text-blue-600'
            }`}
          >
            {puppy.gender}
          </span>
        </div>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-3 sm:p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="font-display font-700 text-base sm:text-lg text-foreground leading-tight">{puppy.name}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground font-500">{puppy.breed}</p>
          </div>
          {isAvailable && (
            <span className="font-display font-700 text-base sm:text-lg text-foreground whitespace-nowrap">
              {formatPrice(puppy.price)}
            </span>
          )}
        </div>

        {/* Details row */}
        <div className="flex flex-wrap gap-x-2 gap-y-1 mb-3 text-xs sm:text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            {age}
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            {puppy.color}
          </span>
          {puppy.expectedAdultSize && (
            <span className="flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
              Est. {puppy.expectedAdultSize}
            </span>
          )}
        </div>

        {/* Short description */}
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4 flex-1 line-clamp-2">
          {puppy.shortDescription}
        </p>

        {/* Health indicators */}
        <div className="flex items-center flex-wrap gap-1.5 mb-3 sm:mb-4">
          {puppy.vetChecked && (
            <span className="health-badge bg-green-50 text-green-700 text-xs">
              <ShieldCheck size={11} />
              Vet Checked
            </span>
          )}
          {puppy.vaccinationStatus && (
            <span className="health-badge bg-blue-50 text-blue-700 text-xs">
              <Syringe size={11} />
              Vaccinated
            </span>
          )}
          {puppy.deliveryAvailable && (
            <span className="health-badge bg-purple-50 text-purple-700 text-xs">
              <MapPin size={11} />
              Delivery
            </span>
          )}
        </div>

        {/* CTA */}
        {isAvailable ? (
          <Link
            href={`/individual-puppy-detail?slug=${puppy.slug}`}
            className="btn-primary text-xs sm:text-sm py-2 sm:py-2.5 w-full"
          >
            <Heart size={14} />
            Meet {puppy.name}
          </Link>
        ) : (
          <Link
            href={`/individual-puppy-detail?slug=${puppy.slug}`}
            className="btn-outline text-xs sm:text-sm py-2 sm:py-2.5 w-full"
          >
            View {puppy.name}
          </Link>
        )}
      </div>
    </article>
  );
});

PuppyCard.displayName = 'PuppyCard';

export default PuppyCard;