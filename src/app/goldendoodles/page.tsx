import React from 'react';
import BreedCategoryPage from '@/components/BreedCategoryPage';

export const metadata = {
  title: 'Goldendoodle Puppies for Sale | USA Pets for Home',
  description: 'Meet our available Goldendoodle puppies. Gentle, intelligent, and wonderfully social — the perfect family companion.',
};

export default function GoldendoodlesPage() {
  return (
    <BreedCategoryPage
      breedSlug="goldendoodle"
      breedName="Goldendoodles"
      heroImage="https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=1200&q=80"
      heroImageAlt="Golden cream Goldendoodle puppy with wavy coat in garden"
      intro="Goldendoodles combine the warm, gentle nature of the Golden Retriever with the intelligence and low-shedding coat of the Poodle. The result is one of the most beloved family dogs in America — social, trainable, and endlessly affectionate."
      temperament="Goldendoodles are known for their exceptional temperament. They are gentle, patient, and wonderfully social — equally at home with children, other pets, and strangers. They are energetic enough to keep up with an active family but calm enough to settle down for a quiet evening at home."
      typicalSize="Mini: 15–35 lbs · Standard: 45–75 lbs (varies by generation)"
      grooming="Regular brushing 3–4 times per week helps prevent matting. Professional grooming every 8–12 weeks is recommended. Their wavy or curly coat is low-shedding but does require consistent maintenance."
      exercise="Active — Goldendoodles love outdoor adventures, fetch, swimming, and hiking. Daily exercise of 30–60 minutes keeps them happy and well-balanced."
      training="Highly trainable. Goldendoodles inherit the Poodle's intelligence and the Golden's eagerness to please, making them one of the easiest breeds to train. They excel in obedience, therapy work, and service roles."
      familySuitability="Outstanding family dogs. They are patient with children of all ages, gentle with seniors, and social with other pets. They thrive in active households that can provide regular exercise and companionship."
      considerations={[
        'Goldendoodles need regular grooming — their coat can mat without consistent brushing.',
        'They are social dogs and do not thrive when left alone for long periods.',
        'Their energy level requires daily exercise and mental stimulation.',
        'Generation (F1, F1B, F2) affects coat type and shedding — ask us about parent generations.',
      ]}
      faqs={[
        { q: 'Are Goldendoodles hypoallergenic?', a: 'Goldendoodles are considered low-shedding and are often better tolerated by allergy sufferers, though no dog is truly 100% hypoallergenic.' },
        { q: 'What is the difference between F1 and F1B?', a: 'An F1 Goldendoodle is a first-generation cross (Golden Retriever × Poodle). An F1B is backcrossed with a Poodle, resulting in a curlier, lower-shedding coat.' },
        { q: 'How big will my Goldendoodle get?', a: 'Size depends on the Poodle parent used. Mini Goldendoodles typically reach 15–35 lbs; standard Goldendoodles typically reach 45–75 lbs.' },
        { q: 'Are Goldendoodles good with children?', a: 'Goldendoodles are exceptional with children — patient, gentle, and playful. They are one of the most family-friendly breeds available.' },
      ]}
    />
  );
}
