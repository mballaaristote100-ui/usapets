import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google';
import '../styles/tailwind.css';
import WhatsAppButton from '@/components/WhatsAppButton';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'USA Pets for Home — Healthy Puppies Raised with Care',
  description:
    'Find your perfect puppy from USA Pets for Home. Teacup Poodles, Yorkies, Goldendoodles, French Bulldogs & English Bulldogs raised with love. Nationwide delivery.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${dmSans.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var _smartsupp = _smartsupp || {};
              _smartsupp.key = '8a5e42eb8fdb8c85193b2a28461b4d8aa679040a';
              window.smartsupp||(function(d) {
                var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
                s=d.getElementsByTagName('script')[0];
                c=d.createElement('script');
                c.type='text/javascript';c.charset='utf-8';c.async=true;
                c.src='https://www.smartsuppchat.com/loader.js?';
                s.parentNode.insertBefore(c,s);
              })(document);
            `,
          }}
        />
</head>
      <body className={dmSans.className}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}