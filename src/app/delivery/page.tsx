import React from 'react';
import Link from 'next/link';
import { Truck, Plane, Globe, Heart, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Puppy Delivery Options | USA Pets for Home',
  description: 'Learn about our puppy delivery options including ground transport and nationwide delivery across the United States.',
};

const DELIVERY_OPTIONS = [
  {
    icon: <Truck size={24} className="text-accent" />,
    title: 'Ground Transportation',
    description: 'Safe, comfortable ground transport to your door. We work with trusted pet transport services that specialize in the safe delivery of puppies across the country.',
    details: ['Door-to-door delivery', 'Climate-controlled vehicles', 'Regular updates during transport', 'Available to most US locations'],
  },
  {
    icon: <Plane size={24} className="text-accent" />,
    title: 'Puppy Nanny / Flight Delivery',
    description: 'For longer distances, a dedicated puppy nanny accompanies your puppy on a direct flight to your nearest major airport. This is the safest and most comfortable air travel option for small puppies.',
    details: ['Puppy travels in-cabin with a dedicated nanny', 'Direct flights preferred', 'Available to major US airports', 'Contact us to check availability for your location'],
  },
];

export default function DeliveryPage() {
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
            <span className="text-foreground font-500">Delivery</span>
          </nav>
          <div className="max-w-2xl">
            <p className="text-xs font-display font-600 tracking-widest uppercase text-accent mb-3">Getting Your Puppy Home</p>
            <h1 className="font-display font-800 text-4xl lg:text-5xl text-foreground leading-tight mb-4">Delivery Options</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">We serve families across the United States. Whether you are nearby or across the country, we have a safe and comfortable delivery option for you and your new puppy.</p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Delivery Options */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {DELIVERY_OPTIONS?.map((option) => (
            <div key={option?.title} className="bg-white border border-border rounded-2xl p-7">
              <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center mb-5">
                {option?.icon}
              </div>
              <h2 className="font-display font-800 text-xl text-foreground mb-3">{option?.title}</h2>
              <p className="text-muted-foreground leading-relaxed text-sm mb-5">{option?.description}</p>
              <ul className="space-y-2">
                {option?.details?.map((detail) => (
                  <li key={detail} className="flex items-start gap-2.5">
                    <CheckCircle size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* What to Expect */}
        <div className="bg-secondary border border-border rounded-2xl p-8 sm:p-12 mb-16">
          <div className="max-w-3xl">
            <p className="text-xs font-display font-600 tracking-widest uppercase text-accent mb-3">What to Expect</p>
            <h2 className="font-display font-800 text-2xl sm:text-3xl text-foreground mb-6">Preparing for Your Puppy's Arrival</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { title: 'Health Documentation', desc: 'Your puppy will arrive with all health records, vaccination documentation, and a veterinary health certificate.' },
                { title: 'Care Guide', desc: 'We provide a detailed care guide covering nutrition, health, and settling-in advice for your specific breed.' },
                { title: 'Starter Kit', desc: 'A small starter food sample and comfort items to help your puppy transition to their new home.' },
                { title: 'Ongoing Support', desc: 'We are available to answer questions after your puppy arrives home. You are not on your own.' },
              ]?.map((item) => (
                <div key={item?.title} className="bg-white rounded-xl p-5 border border-border">
                  <h3 className="font-display font-700 text-base text-foreground mb-2">{item?.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item?.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8 mb-16">
          <div className="flex items-start gap-3 mb-4">
            <AlertCircle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <h2 className="font-display font-700 text-lg text-foreground">Important Delivery Notes</h2>
          </div>
          <ul className="space-y-3 ml-8">
            {[
              'Delivery costs and availability vary by location and delivery method. Please contact us for a specific quote.',
              'Puppies must meet minimum age and health requirements before travel.',
              'We coordinate all delivery logistics after your reservation is confirmed.',
              'We will never ship a puppy unaccompanied as cargo.',
            ]?.map((note, i) => (
              <li key={i} className="text-sm text-amber-800 leading-relaxed">{note}</li>
            ))}
          </ul>
        </div>

        {/* International */}
        <div className="bg-white border border-border rounded-2xl p-8 sm:p-12 mb-16">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
              <Globe size={22} className="text-muted-foreground" />
            </div>
            <div>
              <h2 className="font-display font-800 text-xl text-foreground mb-3">International Delivery</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">International arrangements may be possible depending on destination, applicable import requirements, and availability. International puppy transport involves additional documentation, health testing, and logistics that vary significantly by country.</p>
              <p className="text-muted-foreground leading-relaxed mb-5">We do not promise international delivery to all destinations. Please contact us to discuss your specific situation and we will let you know what is possible.</p>
              <Link href="/contact" className="btn-outline text-sm py-2.5 px-5">
                <MessageCircle size={14} />
                Ask About International Delivery
              </Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-foreground rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="font-display font-800 text-2xl sm:text-3xl text-white mb-3">Questions About Delivery?</h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto">We are happy to discuss delivery options for your specific location. Contact us and we will find the best solution for you and your puppy.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-accent">
              <MessageCircle size={15} />
              Ask About Delivery
            </Link>
            <Link href="/available-puppies" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-display font-600 text-base px-6 py-3 rounded-xl hover:bg-white/20 transition-colors">
              <Heart size={15} />
              View Available Puppies
            </Link>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}
