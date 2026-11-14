import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Users, Home, Leaf } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About Us | USA Pets for Home',
  description: 'Learn about USA Pets for Home — a family-run puppy breeder dedicated to raising healthy, happy puppies for families across the United States.'
};

export default function AboutUsPage() {
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
              <span className="text-foreground font-500">About Us</span>
            </nav>
            <div className="max-w-2xl">
              <p className="text-xs font-display font-600 tracking-widest uppercase text-accent mb-3">Our Story</p>
              <h1 className="font-display font-800 text-4xl lg:text-5xl text-foreground leading-tight mb-4">About USA Pets for Home</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">We are a family-run breeder dedicated to raising healthy, well-socialized puppies and matching them with loving families across the United States.</p>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          {/* Our Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div>
              <p className="text-xs font-display font-600 tracking-widest uppercase text-accent mb-3">Our Story</p>
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-foreground mb-5">Real People. Real Care.</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>USA Pets for Home was founded on a simple belief: every puppy deserves to be raised with individual attention, proper care, and genuine love — and every family deserves to find a puppy they can trust.</p>
                <p>We are not a large commercial operation. We are a small, dedicated team that takes pride in knowing every puppy by name, understanding their individual personality, and making sure they are ready — truly ready — for their forever home.</p>
                <p>Our puppies are raised in a home environment, not in kennels. They grow up surrounded by people, children, and everyday life. By the time they go home with you, they are already comfortable with the world.</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-warm-lg">
              <Image
                src="https://images.unsplash.com/photo-1672363340353-e582a894b925"
                alt="Golden Goldendoodle puppy being held by a family member in a warm home setting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw" />
              
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <p className="text-xs font-display font-600 tracking-widest uppercase text-accent mb-3">What We Stand For</p>
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-foreground">Our Approach</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
              { icon: <Heart size={22} className="text-accent" />, title: 'Health First', desc: 'Every puppy receives proper veterinary care, vaccinations, and health documentation before going home.' },
              { icon: <Home size={22} className="text-accent" />, title: 'Home Raised', desc: 'Our puppies grow up in a warm home environment, not in commercial kennels or facilities.' },
              { icon: <Users size={22} className="text-accent" />, title: 'Family Focused', desc: 'We take time to understand each family\'s lifestyle and match them with the right puppy.' },
              { icon: <Leaf size={22} className="text-accent" />, title: 'Honest & Transparent', desc: 'We do not make claims we cannot support. Every piece of information we share is accurate and verifiable.' }]?.
              map((item) =>
              <div key={item?.title} className="bg-white border border-border rounded-2xl p-6">
                  <div className="w-11 h-11 rounded-xl bg-accent-light flex items-center justify-center mb-4">
                    {item?.icon}
                  </div>
                  <h3 className="font-display font-700 text-base text-foreground mb-2">{item?.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item?.desc}</p>
                </div>
              )}
            </div>
          </div>

          {/* Our Puppies */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-warm-lg order-2 lg:order-1">
              <Image
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1ad785c15-1772137564411.png"
                alt="Apricot Teacup Poodle puppy with fluffy coat sitting in a bright home environment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw" />
              
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-display font-600 tracking-widest uppercase text-accent mb-3">Our Puppies</p>
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-foreground mb-5">Breeds We Raise</h2>
              <p className="text-muted-foreground leading-relaxed mb-5">We specialize in five beloved breeds, each chosen for their wonderful temperament, adaptability, and suitability for family life:</p>
              <ul className="space-y-3 mb-6">
                {['Teacup Poodles', 'Yorkshire Terriers (Yorkies)', 'Goldendoodles', 'French Bulldogs', 'English Bulldogs']?.map((breed) =>
                <li key={breed} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{breed}</span>
                  </li>
                )}
              </ul>
              <Link href="/available-puppies" className="btn-accent text-sm px-5 py-2.5">
                <Heart size={14} />
                View Available Puppies
              </Link>
            </div>
          </div>

          {/* Supporting New Families */}
          <div className="bg-secondary border border-border rounded-2xl p-8 sm:p-12 mb-16">
            <div className="max-w-3xl">
              <p className="text-xs font-display font-600 tracking-widest uppercase text-accent mb-3">After You Bring Your Puppy Home</p>
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-foreground mb-5">Supporting New Puppy Families</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Bringing a new puppy home is an exciting time — and it can also come with questions. We do not disappear after your puppy goes home. We are available to answer questions, offer guidance, and support you as you settle in with your new companion.</p>
              <p className="text-muted-foreground leading-relaxed mb-6">Every puppy goes home with a detailed care guide covering nutrition, health, training basics, and breed-specific advice. We want you to feel confident and prepared from day one.</p>
              <Link href="/contact" className="btn-outline text-sm px-5 py-2.5">Get in Touch</Link>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-foreground rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="font-display font-800 text-2xl sm:text-3xl text-white mb-3">Ready to Find Your Puppy?</h2>
            <p className="text-white/70 mb-8 max-w-md mx-auto">Browse our available puppies and take the first step toward welcoming a new companion into your family.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/available-puppies" className="btn-accent">
                <Heart size={15} />
                View Available Puppies
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-display font-600 text-base px-6 py-3 rounded-xl hover:bg-white/20 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>);

}