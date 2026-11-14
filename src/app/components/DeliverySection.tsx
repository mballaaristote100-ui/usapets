import React from 'react';
import Link from 'next/link';
import { Truck, Plane, Phone } from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


const DELIVERY_OPTIONS = [
{
  id: 'delivery-ground',
  icon: Truck,
  title: 'Ground Transportation',
  description: 'Safe, comfortable ground delivery to your door. Available to most locations across the continental United States.'
},
{
  id: 'delivery-flight',
  icon: Plane,
  title: 'Puppy Nanny Flight',
  description: 'A dedicated puppy nanny accompanies your puppy on a direct flight to your nearest major airport.'
}];


export default function DeliverySection() {
  return (
    <section className="py-20 lg:py-28 bg-foreground text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <p className="text-accent font-display font-600 text-xs tracking-widest uppercase mb-3">Nationwide Delivery</p>
            <h2 className="font-display font-700 text-4xl text-white mb-5 leading-tight">
              We Bring Your Puppy<br />to You
            </h2>
            <p className="text-white/60 leading-relaxed mb-8 text-base">
              Distance is no barrier to finding your perfect puppy. We offer several safe, comfortable delivery options to families across the United States.
            </p>

            <div className="space-y-5 mb-8">
              {DELIVERY_OPTIONS?.map((opt) => {
                const Icon = opt?.icon;
                return (
                  <div key={opt?.id} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display font-600 text-white text-sm mb-1">{opt?.title}</h3>
                      <p className="text-sm text-white/50 leading-relaxed">{opt?.description}</p>
                    </div>
                  </div>);

              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/delivery" className="btn-accent text-sm px-6 py-3">
                Learn About Delivery
              </Link>
              <a href="mailto:contact@usapetsforhome.com" className="btn-outline border-white/20 text-white hover:bg-white hover:text-foreground text-sm px-6 py-3">
                <Phone size={14} />
                Ask About Delivery
              </a>
            </div>
          </div>

          {/* Right — Map-style visual */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-square max-w-md mx-auto">
              <img
                src="https://images.unsplash.com/photo-1629120342080-386482254f40"
                alt="Golden Goldendoodle puppy running happily on grass in open countryside"
                className="w-full h-full object-cover opacity-80" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-display font-600 text-lg mb-1">Serving All 50 States</p>
                <p className="text-white/60 text-sm">Contact us to discuss delivery options for your location.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}