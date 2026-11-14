import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { Mail, Heart } from 'lucide-react';

// Simple inline SVG icons for social media
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <AppLogo size={36} />
              <span className="font-display font-700 text-lg text-white">USA Pets for Home</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-5">
              Healthy, happy puppies raised with care and love, ready to become part of your family. Serving families across the United States.
            </p>
            <div className="flex items-center gap-1 mb-4">
              <Mail size={14} className="text-accent flex-shrink-0" />
              <a href="mailto:contact@usapetsforhome.com" className="text-sm text-white/70 hover:text-accent transition-colors">
                contact@usapetsforhome.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Follow us on Instagram"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                aria-label="Follow us on Facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Column 2 — Puppies */}
          <div>
            <h4 className="font-display font-600 text-sm tracking-widest uppercase text-white/40 mb-4">Puppies</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Available Puppies', href: '/available-puppies' },
                { label: 'Teacup Poodles', href: '/teacup-poodles' },
                { label: 'Yorkie Puppies', href: '/yorkie-puppies' },
                { label: 'Goldendoodles', href: '/goldendoodles' },
                { label: 'French Bulldogs', href: '/french-bulldogs' },
                { label: 'English Bulldogs', href: '/english-bulldogs' },
                { label: 'Upcoming Litters', href: '/upcoming-litters' },
              ]?.map((item) => (
                <li key={`footer-puppy-${item?.href}`}>
                  <Link href={item?.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {item?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Helpful Information */}
          <div>
            <h4 className="font-display font-600 text-sm tracking-widest uppercase text-white/40 mb-4">Information</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'How It Works', href: '/how-it-works' },
                { label: 'Delivery', href: '/delivery' },
                { label: 'Health Guarantee', href: '/health-guarantee' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Contact Us', href: '/contact' },
              ]?.map((item) => (
                <li key={`footer-info-${item?.href}`}>
                  <Link href={item?.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {item?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Company */}
          <div>
            <h4 className="font-display font-600 text-sm tracking-widest uppercase text-white/40 mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About Us', href: '/about-us' },
                { label: 'Happy Families', href: '/happy-families' },
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms & Conditions', href: '/terms' },
              ]?.map((item) => (
                <li key={`footer-company-${item?.href}`}>
                  <Link href={item?.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {item?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © USA Pets for Home. All rights reserved.
          </p>
          <p className="text-sm text-white/40 flex items-center gap-1.5">
            Made with <Heart size={12} className="text-accent fill-accent" /> for families across America
          </p>
        </div>
      </div>
    </footer>
  );
}