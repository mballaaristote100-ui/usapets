import React from 'react';
import BreedCategoryPage from '@/components/BreedCategoryPage';

export const metadata = {
  title: 'Teacup Poodle Puppies for Sale | USA Pets for Home',
  description: 'Meet our available Teacup Poodle puppies. Tiny, intelligent, and endlessly loving — raised with care in a family home.',
};

export default function TeacupPoodlesPage() {
  return (
    <BreedCategoryPage
      breedSlug="teacup-poodle"
      breedName="Teacup Poodles"
      heroImage="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=80"
      heroImageAlt="Adorable apricot Teacup Poodle puppy with fluffy curly coat"
      intro="Teacup Poodles are among the most beloved companion dogs in the world — and for good reason. Tiny in size but enormous in personality, they combine the Poodle's legendary intelligence with an affectionate, devoted nature that makes them ideal for families, couples, and individuals alike."
      temperament="Teacup Poodles are exceptionally bright, eager to please, and deeply bonded to their families. They are gentle with children, get along well with other pets, and adapt beautifully to apartment living. Despite their small size, they are alert and curious — always ready for a new adventure or a cozy cuddle session."
      typicalSize="3–6 lbs fully grown"
      grooming="Regular professional grooming every 6–8 weeks is recommended to keep their curly coat healthy and tangle-free. Daily brushing helps prevent matting."
      exercise="Moderate — short daily walks and indoor play sessions are ideal. They love mental stimulation through training and puzzle toys."
      training="Highly trainable. Teacup Poodles excel at learning commands and tricks. Positive reinforcement works beautifully with this breed."
      familySuitability="Excellent for families, singles, seniors, and apartment dwellers. They thrive on human companionship and do not do well when left alone for long periods."
      considerations={[
        'Teacup Poodles are delicate — young children should be supervised around them.',
        'They can be prone to hypoglycemia; small, frequent meals are important.',
        'Regular dental care is essential for this breed.',
        'They crave companionship and may develop separation anxiety if left alone frequently.',
      ]}
      faqs={[
        { q: 'How big do Teacup Poodles get?', a: 'Teacup Poodles typically weigh between 3 and 6 pounds fully grown and stand about 9 inches tall.' },
        { q: 'Are Teacup Poodles hypoallergenic?', a: 'Poodles are considered one of the most hypoallergenic breeds due to their low-shedding curly coat, making them a popular choice for allergy sufferers.' },
        { q: 'How long do Teacup Poodles live?', a: 'With proper care, Teacup Poodles can live 12–15 years or longer.' },
        { q: 'Are they good with children?', a: 'Yes, though due to their small size, interactions with very young children should always be supervised to prevent accidental injury.' },
      ]}
    />
  );
}
