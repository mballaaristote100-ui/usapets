import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Upcoming Litters | USA Pets for Home',
  description: 'View our planned and upcoming puppy litters. Join the waitlist to be notified when puppies become available.'
};

const UPCOMING_LITTERS = [
{
  id: 'litter-001',
  breed: 'Teacup Poodle',
  mother: { name: 'Sophie', breed: 'Teacup Poodle', image: "https://img.rocket.new/generatedImages/rocket_gen_img_193621be9-1772139677821.png", alt: 'Sophie the mother Teacup Poodle with apricot coat' },
  father: { name: 'Coco', breed: 'Teacup Poodle', image: "https://images.unsplash.com/photo-1652487955075-cd14238cf20c", alt: 'Coco the father Teacup Poodle with cream coat' },
  expectedDate: 'Fall 2026',
  expectedCount: '2–4 puppies',
  status: 'Planned',
  notes: 'Expected colors: apricot, cream, and white. Both parents are health tested.'
},
{
  id: 'litter-002',
  breed: 'Goldendoodle',
  mother: { name: 'Honey', breed: 'Golden Retriever', image: "https://img.rocket.new/generatedImages/rocket_gen_img_136bb6459-1772134257663.png", alt: 'Honey the Golden Retriever mother with warm golden coat' },
  father: { name: 'Duke', breed: 'Standard Poodle', image: "https://images.unsplash.com/photo-1647126224663-8e754f6fd026", alt: 'Duke the Standard Poodle father with cream coat' },
  expectedDate: 'Winter 2026',
  expectedCount: '4–6 puppies',
  status: 'Planned',
  notes: 'F1B Goldendoodles. Expected colors: golden cream and chocolate. Low-shedding coats anticipated.'
},
{
  id: 'litter-003',
  breed: 'French Bulldog',
  mother: null,
  father: null,
  expectedDate: 'Spring 2027',
  expectedCount: 'TBD',
  status: 'Anticipated',
  notes: 'Details to be confirmed. Join the waitlist to be notified when this litter is confirmed.'
}];


const STATUS_COLORS: Record<string, string> = {
  Planned: 'bg-blue-50 text-blue-700 border-blue-200',
  Anticipated: 'bg-amber-50 text-amber-700 border-amber-200',
  Confirmed: 'bg-green-50 text-green-700 border-green-200'
};

export default function UpcomingLittersPage() {
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
            <span className="text-foreground font-500">Upcoming Litters</span>
          </nav>
          <div className="max-w-2xl">
            <p className="text-xs font-display font-600 tracking-widest uppercase text-accent mb-3">Coming Soon</p>
            <h1 className="font-display font-800 text-4xl lg:text-5xl text-foreground leading-tight mb-4">Upcoming Litters</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">Planning ahead? Browse our upcoming litters and join the waitlist to be notified when puppies become available. Joining the waitlist does not guarantee a puppy but ensures you are first to know.</p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Litters */}
        <div className="space-y-6 mb-16">
          {UPCOMING_LITTERS.map((litter) =>
            <div key={litter.id} className="bg-white border border-border rounded-2xl p-7 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="font-display font-800 text-xl text-foreground">{litter.breed} Litter</h2>
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-display font-600 border ${STATUS_COLORS[litter.status] || STATUS_COLORS.Anticipated}`}>
                      {litter.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Calendar size={13} /> {litter.expectedDate}</span>
                    <span>·</span>
                    <span>{litter.expectedCount}</span>
                  </div>
                </div>
                <Link href={`/waitlist?breed=${litter.breed.toLowerCase().replace(/ /g, '-')}`} className="btn-accent text-sm px-5 py-2.5 flex-shrink-0">
                  <Heart size={14} />
                  Join Waitlist
                </Link>
              </div>

              {(litter.mother || litter.father) &&
              <div className="flex flex-wrap gap-4 mb-5">
                  {[litter.mother && { ...litter.mother, role: 'Mother' }, litter.father && { ...litter.father, role: 'Father' }].filter(Boolean).map((parent) =>
                <div key={parent!.role} className="flex items-center gap-3 bg-secondary rounded-xl px-4 py-3 border border-border">
                      <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                        <Image src={parent!.image} alt={parent!.alt} fill className="object-cover" sizes="40px" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-500">{parent!.role}</p>
                        <p className="font-display font-700 text-sm text-foreground">{parent!.name}</p>
                        <p className="text-xs text-muted-foreground">{parent!.breed}</p>
                      </div>
                    </div>
                )}
                </div>
              }

              {litter.notes &&
              <p className="text-sm text-muted-foreground bg-secondary rounded-xl px-4 py-3 border border-border leading-relaxed">{litter.notes}</p>
              }
            </div>
            )}
        </div>

        {/* Waitlist CTA */}
        <div className="bg-foreground rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="font-display font-800 text-2xl sm:text-3xl text-white mb-3">Don't See What You're Looking For?</h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto">Join our waitlist and tell us your preferences. We will contact you when a puppy matching your criteria becomes available.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/waitlist" className="btn-accent">
              <Heart size={15} />
              Join the Waitlist
            </Link>
            <Link href="/available-puppies" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-display font-600 text-base px-6 py-3 rounded-xl hover:bg-white/20 transition-colors">
              View Available Now
            </Link>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>);

}