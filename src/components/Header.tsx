'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { ChevronDown, Menu, X, ArrowRight, Heart } from 'lucide-react';

const BREEDS_DROPDOWN = [
  { label: 'Teacup Poodles', href: '/teacup-poodles' },
  { label: 'Yorkie Puppies', href: '/yorkie-puppies' },
  { label: 'Goldendoodles', href: '/goldendoodles' },
  { label: 'French Bulldogs', href: '/french-bulldogs' },
  { label: 'English Bulldogs', href: '/english-bulldogs' },
];

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Available Puppies', href: '/available-puppies' },
  { label: 'Puppy Finder', href: '/puppy-finder' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Delivery', href: '/delivery' },
  { label: 'About Us', href: '/about-us' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [breedsOpen, setBreedsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileBreeds, setMobileBreeds] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setBreedsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-border shadow-sm'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
              <AppLogo size={36} />
              <span className="font-display font-700 text-lg text-foreground tracking-tight hidden sm:block">
                USA Pets for Home
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link key={`nav-${link.href}`} href={link.href} className="nav-link px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors">
                  {link.label}
                </Link>
              ))}

              {/* Breeds Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setBreedsOpen(!breedsOpen)}
                  className="nav-link flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors"
                  aria-expanded={breedsOpen}
                  aria-haspopup="true"
                >
                  Breeds
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${breedsOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {breedsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl border border-border shadow-warm-lg py-1.5 animate-fade-in">
                    {BREEDS_DROPDOWN.map((breed) => (
                      <Link
                        key={`dropdown-${breed.href}`}
                        href={breed.href}
                        onClick={() => setBreedsOpen(false)}
                        className="flex items-center px-4 py-2.5 text-sm font-display font-500 text-foreground hover:bg-muted/60 hover:text-accent transition-colors"
                      >
                        {breed.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/available-puppies" className="btn-accent text-sm px-5 py-2.5">
                <Heart size={15} />
                Find Your Puppy
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors text-foreground"
              aria-label="Open navigation menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`drawer-overlay ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`} role="dialog" aria-label="Navigation menu">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
            <AppLogo size={32} />
            <span className="font-display font-700 text-base text-foreground">USA Pets for Home</span>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Mobile CTA */}
        <div className="p-4 border-b border-border">
          <Link
            href="/available-puppies"
            onClick={() => setMobileOpen(false)}
            className="btn-accent w-full justify-center"
          >
            <Heart size={16} />
            View Available Puppies
          </Link>
        </div>

        <nav className="p-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={`mobile-nav-${link.href}`}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between px-3 py-3 rounded-lg font-display font-500 text-foreground hover:bg-muted/50 hover:text-accent transition-colors"
            >
              {link.label}
              <ArrowRight size={14} className="text-muted-foreground" />
            </Link>
          ))}

          {/* Breeds Accordion */}
          <div>
            <button
              onClick={() => setMobileBreeds(!mobileBreeds)}
              className="flex items-center justify-between w-full px-3 py-3 rounded-lg font-display font-500 text-foreground hover:bg-muted/50 transition-colors"
            >
              Breeds
              <ChevronDown
                size={15}
                className={`text-muted-foreground transition-transform duration-200 ${mobileBreeds ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileBreeds && (
              <div className="ml-4 mt-1 space-y-1 animate-fade-in">
                {BREEDS_DROPDOWN.map((breed) => (
                  <Link
                    key={`mobile-breed-${breed.href}`}
                    href={breed.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center px-3 py-2.5 rounded-lg text-sm font-display font-500 text-muted-foreground hover:text-accent hover:bg-muted/50 transition-colors"
                  >
                    {breed.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="p-4 mt-auto border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            Questions?{' '}
            <a href="mailto:contact@usapetsforhome.com" className="text-accent font-500 hover:underline">
              contact@usapetsforhome.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
}