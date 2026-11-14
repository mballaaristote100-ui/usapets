import React from 'react';
import BreedCategoryPage from '@/components/BreedCategoryPage';

export const metadata = {
  title: 'Yorkie Puppies for Sale | USA Pets for Home',
  description: 'Browse our available Yorkshire Terrier puppies. Bold, loving, and beautifully silky-coated — raised with care for families across the US.',
};

export default function YorkiePuppiesPage() {
  return (
    <BreedCategoryPage
      breedSlug="yorkie"
      breedName="Yorkie Puppies"
      heroImage="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=1200&q=80"
      heroImageAlt="Yorkshire Terrier puppy with silky tan and blue coat"
      intro="Yorkshire Terriers — affectionately known as Yorkies — pack an enormous personality into a tiny, elegant frame. With their gorgeous silky coats and fearless, spirited nature, Yorkies have been one of America's most beloved companion breeds for generations."
      temperament="Yorkies are bold, curious, and deeply loyal. They form strong bonds with their families and love being the center of attention. Despite their small size, they have a confident, sometimes feisty personality — they are not shy about letting you know what they want. They are affectionate and loving with their people."
      typicalSize="4–7 lbs fully grown"
      grooming="The Yorkie's silky coat requires regular brushing to prevent tangles. Many owners opt for a shorter 'puppy cut' for easier maintenance. Professional grooming every 6–8 weeks is recommended."
      exercise="Moderate — daily walks and indoor play sessions keep them happy and healthy. They enjoy short bursts of activity followed by relaxation."
      training="Intelligent and eager, Yorkies respond well to positive reinforcement training. Early socialization helps channel their bold personality constructively."
      familySuitability="Excellent for families, singles, and seniors. They adapt well to apartment living and are devoted companions. Best suited to homes where they receive plenty of attention."
      considerations={[
        'Yorkies can be prone to dental issues — regular dental care is important.',
        'Their small size makes them fragile; supervision with young children is recommended.',
        'They can be vocal — early training helps manage barking.',
        'They thrive on companionship and may not do well when left alone for extended periods.',
      ]}
      faqs={[
        { q: 'How big do Yorkies get?', a: 'Yorkshire Terriers typically weigh 4–7 pounds fully grown, though some individuals may be slightly larger.' },
        { q: 'Do Yorkies shed?', a: 'Yorkies have hair rather than fur, which means they shed very little — making them a popular choice for those with mild allergies.' },
        { q: 'Are Yorkies good apartment dogs?', a: 'Yes — Yorkies adapt beautifully to apartment living as long as they receive daily exercise and plenty of companionship.' },
        { q: 'How long do Yorkies live?', a: 'Yorkshire Terriers are a long-lived breed, with a typical lifespan of 13–16 years.' },
      ]}
    />
  );
}
