import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms & Conditions | USA Pets for Home',
  description: 'Terms and Conditions for USA Pets for Home. Please read these terms carefully before using our website or services.',
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-16">
        <div className="bg-white border-b border-border py-12 lg:py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              <span>/</span>
              <span className="text-foreground font-500">Terms & Conditions</span>
            </nav>
            <div className="max-w-2xl">
              <h1 className="font-display font-800 text-4xl lg:text-5xl text-foreground leading-tight mb-3">Terms & Conditions</h1>
              <p className="text-muted-foreground">Last updated: [Date to be confirmed by USA Pets for Home]</p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-10">
            <p className="text-sm text-amber-800"><strong>Note:</strong> This is a placeholder Terms & Conditions document. USA Pets for Home should review and update this document with their actual policies and consult with a legal professional to ensure compliance with applicable laws.</p>
          </div>

          <div className="prose prose-stone max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using the USA Pets for Home website, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.</p>

            <h2>2. Use of Website</h2>
            <p>You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You may not use this website to transmit any harmful, offensive, or disruptive content.</p>

            <h2>3. Puppy Listings and Availability</h2>
            <p>Puppy listings on this website are for informational purposes. Availability is subject to change. Viewing a puppy listing does not reserve or guarantee availability. A puppy is only reserved upon receipt of a confirmed reservation deposit following application approval.</p>

            <h2>4. Application Process</h2>
            <p>Submitting a buyer application does not guarantee approval or the availability of a specific puppy. USA Pets for Home reserves the right to approve or decline applications at its sole discretion. We approach every application with care and respect.</p>

            <h2>5. Reservation Deposits</h2>
            <p>Reservation deposit terms, including refund policies, are outlined in the reservation agreement provided upon application approval. Please review the reservation agreement carefully before submitting a deposit. By submitting a deposit, you agree to the terms of the reservation agreement.</p>

            <h2>6. Health Guarantee</h2>
            <p>Health guarantee terms are specific to each puppy and are detailed in the individual puppy profile and reservation agreement. The health guarantee is subject to the conditions outlined in the reservation agreement and does not cover all health conditions.</p>

            <h2>7. Pricing</h2>
            <p>Prices listed on this website are subject to change without notice. The price confirmed in your reservation agreement is the binding price for your transaction.</p>

            <h2>8. Delivery</h2>
            <p>Delivery terms, costs, and availability are subject to change. Delivery arrangements are confirmed as part of the reservation process. USA Pets for Home is not responsible for delays or issues caused by third-party transport providers.</p>

            <h2>9. Intellectual Property</h2>
            <p>All content on this website, including text, images, and design, is the property of USA Pets for Home or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>

            <h2>10. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, USA Pets for Home shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or our services.</p>

            <h2>11. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms and Conditions at any time. Changes will be effective upon posting to this page. Your continued use of the website after changes are posted constitutes your acceptance of the revised terms.</p>

            <h2>12. Governing Law</h2>
            <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of the United States. [Specific state jurisdiction to be confirmed by USA Pets for Home.]</p>

            <h2>13. Contact</h2>
            <p>For questions about these Terms and Conditions, please contact us at:</p>
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
