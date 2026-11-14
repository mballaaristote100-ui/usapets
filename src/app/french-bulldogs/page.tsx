import React from 'react';
import BreedCategoryPage from '@/components/BreedCategoryPage';

export const metadata = {
  title: 'French Bulldog Puppies for Sale | USA Pets for Home',
  description: 'Browse our available French Bulldog puppies. Charming, adaptable, and devoted — the perfect companion for city and suburban living.',
};

export default function FrenchBulldogsPage() {
  return (
    <BreedCategoryPage
      breedSlug="french-bulldog"
      breedName="French Bulldogs"
      heroImage="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=1200&q=80"
      heroImageAlt="Fawn French Bulldog puppy with iconic bat ears sitting on white background"
      intro="French Bulldogs have become one of the most popular breeds in the United States — and it is easy to see why. With their iconic bat ears, compact muscular build, and endlessly charming personality, Frenchies make devoted, adaptable companions for virtually any lifestyle."
      temperament="French Bulldogs are affectionate, playful, and wonderfully adaptable. They form deep bonds with their families and love being close to their people. They are generally calm indoors and do not require extensive exercise, making them ideal for apartment living. They are social, friendly, and rarely aggressive."
      typicalSize="18–28 lbs fully grown"
      grooming="Low maintenance — their short, smooth coat requires only weekly brushing. Regular cleaning of facial folds is important to prevent skin irritation. Nail trimming and ear cleaning should be done regularly."
      exercise="Moderate — short daily walks and indoor play sessions are ideal. French Bulldogs are brachycephalic (flat-faced) and should not be over-exercised, especially in hot weather."
      training="Intelligent but can be stubborn. Consistent, positive reinforcement training works best. Early socialization is important for a well-rounded Frenchie."
      familySuitability="Excellent for families, couples, singles, and seniors. They adapt well to apartment living and are devoted, low-maintenance companions. Their calm indoor nature makes them ideal city dogs."
      considerations={[
        'French Bulldogs are brachycephalic — avoid strenuous exercise in heat or humidity.',
        'They can be prone to certain health conditions; responsible breeding and health testing are important.',
        'They are sensitive to extreme temperatures and should be kept in climate-controlled environments.',
        'Frenchies can be gassy — diet plays an important role in their comfort.',
      ]}
      faqs={[
        { q: 'Are French Bulldogs good apartment dogs?', a: 'French Bulldogs are one of the best breeds for apartment living. They are calm indoors, do not require extensive exercise, and adapt well to smaller spaces.' },
        { q: 'Do French Bulldogs shed?', a: 'French Bulldogs do shed, though their short coat means shedding is manageable with regular brushing.' },
        { q: 'Are French Bulldogs good with children?', a: 'Yes — French Bulldogs are generally gentle and patient with children. Their sturdy build makes them more resilient than some smaller breeds.' },
        { q: 'Why are French Bulldogs more expensive than some other breeds?', a: 'French Bulldogs are more costly to breed responsibly — they often require artificial insemination and C-sections, and responsible health testing adds to the cost.' },
      ]}
    />
  );
}
