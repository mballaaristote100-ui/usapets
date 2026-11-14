import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Happy Families | USA Pets for Home',
  description: 'Read stories from families who have welcomed puppies from USA Pets for Home into their lives.'
};

const TESTIMONIALS = [
{
  id: 't-001',
  customerName: 'Sarah M.',
  location: 'Austin, TX',
  puppyName: 'Bella',
  breed: 'Teacup Poodle',
  rating: 5,
  review: 'Bella has been the most wonderful addition to our family. She arrived healthy, happy, and already so well-socialized. The whole process from application to pickup was smooth and professional. We could not be happier.',
  date: 'June 2026',
  customerImage: "https://images.unsplash.com/photo-1577042662593-b4d55517ce31",
  customerImageAlt: 'Sarah M. smiling with her Teacup Poodle Bella',
  puppyImage: "https://img.rocket.new/generatedImages/rocket_gen_img_12507fbff-1772137623863.png",
  puppyImageAlt: 'Bella the apricot Teacup Poodle puppy',
  isDemo: true
},
{
  id: 't-002',
  customerName: 'James & Lisa R.',
  location: 'Nashville, TN',
  puppyName: 'Luna',
  breed: 'Goldendoodle',
  rating: 5,
  review: 'We were nervous about the process but USA Pets for Home made everything so easy. Luna is exactly as described — gentle, social, and absolutely beautiful. Our kids are obsessed with her. The health documentation was thorough and our vet was very impressed.',
  date: 'May 2026',
  customerImage: "https://img.rocket.new/generatedImages/rocket_gen_img_16bd3800a-1771893424520.png",
  customerImageAlt: 'James and Lisa R. with their Goldendoodle Luna',
  puppyImage: "https://images.unsplash.com/photo-1512906667897-93c129e75607",
  puppyImageAlt: 'Luna the golden cream Goldendoodle puppy',
  isDemo: true
},
{
  id: 't-003',
  customerName: 'Maria C.',
  location: 'Miami, FL',
  puppyName: 'Oliver',
  breed: 'Yorkie',
  rating: 5,
  review: 'Oliver is everything I hoped for and more. He arrived via puppy nanny and was calm and comfortable — clearly well-cared for. He settled into our home within days. I have already recommended USA Pets for Home to three friends.',
  date: 'April 2026',
  customerImage: "https://images.unsplash.com/photo-1679486298365-c238f4f320f2",
  customerImageAlt: 'Maria C. holding her Yorkie puppy Oliver',
  puppyImage: "https://img.rocket.new/generatedImages/rocket_gen_img_16a6a1cc0-1772139781486.png",
  puppyImageAlt: 'Oliver the Yorkshire Terrier puppy with silky coat',
  isDemo: true
},
{
  id: 't-004',
  customerName: 'David K.',
  location: 'Chicago, IL',
  puppyName: 'Winston',
  breed: 'English Bulldog',
  rating: 5,
  review: 'Winston is the most lovable dog I have ever had. The breeder was incredibly responsive throughout the process and the care guide they provided was genuinely helpful. Winston was healthy, well-adjusted, and ready to be part of our family from day one.',
  date: 'March 2026',
  customerImage: "https://images.unsplash.com/photo-1663281267988-1bec59534411",
  customerImageAlt: 'David K. with his English Bulldog Winston',
  puppyImage: "https://images.unsplash.com/photo-1596032308840-2ef1fb0a2119",
  puppyImageAlt: 'Winston the brindle English Bulldog puppy',
  isDemo: true
},
{
  id: 't-005',
  customerName: 'Jennifer & Tom W.',
  location: 'Seattle, WA',
  puppyName: 'Penny',
  breed: 'French Bulldog',
  rating: 5,
  review: 'Penny is absolutely perfect. We had a lot of questions before committing and every single one was answered patiently and honestly. The application process felt thorough but not invasive — it was clear they genuinely care about where their puppies go.',
  date: 'February 2026',
  customerImage: "https://images.unsplash.com/photo-1647888774545-96f662a65e15",
  customerImageAlt: 'Jennifer and Tom W. with their French Bulldog Penny',
  puppyImage: "https://images.unsplash.com/photo-1609161854602-fdf1d9994cbc",
  puppyImageAlt: 'Penny the lilac fawn French Bulldog puppy',
  isDemo: true
},
{
  id: 't-006',
  customerName: 'Rachel B.',
  location: 'Denver, CO',
  puppyName: 'Chloe',
  breed: 'Teacup Poodle',
  rating: 5,
  review: 'Chloe is the tiniest, most precious thing. She came home with all her paperwork in perfect order and has been healthy and happy since day one. I cannot imagine life without her. Thank you for raising such a wonderful puppy.',
  date: 'January 2026',
  customerImage: "https://images.unsplash.com/photo-1679486298365-c238f4f320f2",
  customerImageAlt: 'Rachel B. holding her white Teacup Poodle Chloe',
  puppyImage: "https://images.unsplash.com/photo-1655463512755-1f36455eaf1f",
  puppyImageAlt: 'Chloe the white Teacup Poodle puppy',
  isDemo: true
}];


function StarRating({ rating }: {rating: number;}) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) =>
      <Star key={i} size={14} className={i < rating ? 'text-amber-400 fill-amber-400' : 'text-muted'} />
      )}
    </div>);

}

export default function HappyFamiliesPage() {
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
              <span className="text-foreground font-500">Happy Families</span>
            </nav>
            <div className="max-w-2xl">
              <p className="text-xs font-display font-600 tracking-widest uppercase text-accent mb-3">Reviews</p>
              <h1 className="font-display font-800 text-4xl lg:text-5xl text-foreground leading-tight mb-4">Happy Families</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">Stories from families who have welcomed one of our puppies into their home. These are real experiences from real families.</p>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          {/* Demo Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-10 flex items-start gap-3">
            <span className="text-amber-600 text-sm font-display font-600 flex-shrink-0">Note:</span>
            <p className="text-sm text-amber-800">The testimonials below are placeholder content for demonstration purposes. Real customer reviews will be added as they are received and approved.</p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {TESTIMONIALS.map((t) =>
            <div key={t.id} className="bg-white border border-border rounded-2xl p-6 flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image src={t.customerImage} alt={t.customerImageAlt} fill className="object-cover" sizes="48px" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-700 text-sm text-foreground">{t.customerName}</p>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                    <StarRating rating={t.rating} />
                  </div>
                </div>

                <blockquote className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                  &ldquo;{t.review}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                    <Image src={t.puppyImage} alt={t.puppyImageAlt} fill className="object-cover" sizes="40px" />
                  </div>
                  <div>
                    <p className="text-xs font-display font-600 text-foreground">{t.puppyName}</p>
                    <p className="text-xs text-muted-foreground">{t.breed} · {t.date}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="bg-foreground rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="font-display font-800 text-2xl sm:text-3xl text-white mb-3">Ready to Write Your Own Story?</h2>
            <p className="text-white/70 mb-8 max-w-md mx-auto">Browse our available puppies and take the first step toward welcoming a new companion into your family.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/available-puppies" className="btn-accent">
                <Heart size={15} />
                View Available Puppies
              </Link>
              <Link href="/how-it-works" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-display font-600 text-base px-6 py-3 rounded-xl hover:bg-white/20 transition-colors">
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>);

}