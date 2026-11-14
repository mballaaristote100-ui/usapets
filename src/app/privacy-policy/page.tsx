import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | USA Pets for Home',
  description: 'Privacy Policy for USA Pets for Home. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-16">
        <div className="bg-white border-b border-border py-12 lg:py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              <span>/</span>
              <span className="text-foreground font-500">Privacy Policy</span>
            </nav>
            <div className="max-w-2xl">
              <h1 className="font-display font-800 text-4xl lg:text-5xl text-foreground leading-tight mb-3">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: [Date to be confirmed by USA Pets for Home]</p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-10">
            <p className="text-sm text-amber-800"><strong>Note:</strong> This is a placeholder Privacy Policy. USA Pets for Home should review and update this document with their actual practices and consult with a legal professional to ensure compliance with applicable laws.</p>
          </div>

          <div className="prose prose-stone max-w-none">
            <h2>1. Introduction</h2>
            <p>USA Pets for Home (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services.</p>

            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, mailing address, and state when you submit an application, contact form, or waitlist request.</li>
              <li><strong>Application Information:</strong> Information you provide in buyer applications, including home environment and lifestyle details.</li>
              <li><strong>Usage Information:</strong> Information about how you use our website, including pages visited and interactions.</li>
              <li><strong>Communications:</strong> Records of communications between you and USA Pets for Home.</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process and review buyer applications</li>
              <li>Respond to inquiries and contact form submissions</li>
              <li>Manage our waitlist and notify you of available puppies</li>
              <li>Communicate about reservations and transactions</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>4. Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
            <ul>
              <li>Service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements</li>
              <li>Law enforcement or government authorities when required by law</li>
            </ul>

            <h2>5. Data Security</h2>
            <p>We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.</p>

            <h2>6. Your Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data. To exercise these rights, please contact us at <a href="mailto:contact@usapetsforhome.com">contact@usapetsforhome.com</a>.</p>

            <h2>7. Cookies</h2>
            <p>Our website may use cookies and similar tracking technologies to improve your browsing experience. You can control cookie settings through your browser preferences.</p>

            <h2>8. Children&apos;s Privacy</h2>
            <p>Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13.</p>

            <h2>9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated date.</p>

            <h2>10. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at:</p>
            <p>
              <strong>USA Pets for Home</strong><br />
              Email: <a href="mailto:contact@usapetsforhome.com">contact@usapetsforhome.com</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
