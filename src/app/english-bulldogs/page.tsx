import React from 'react';
import BreedCategoryPage from '@/components/BreedCategoryPage';

export const metadata = {
  title: 'English Bulldog Puppies for Sale | USA Pets for Home',
  description: 'Meet our available English Bulldog puppies. Gentle, loyal, and wonderfully calm — a classic family companion.',
};

export default function EnglishBulldogsPage() {
  return (
    <BreedCategoryPage
      breedSlug="english-bulldog"
      breedName="English Bulldogs"
      heroImage="/assets/images/Get_your_shirt_now__link_on_my_bio____-1787046066419.jpg"
      heroImageAlt="Brindle and white English Bulldog puppy with wrinkled face sitting on grass"
      intro="English Bulldogs are one of the most iconic and beloved breeds in the world. With their distinctive wrinkled face, wide stance, and gentle, steady temperament, they have earned a devoted following among families who appreciate a calm, loyal, and deeply affectionate companion."
      temperament="English Bulldogs are known for their gentle, patient, and affectionate nature. Despite their tough appearance, they are among the most docile and good-natured of all breeds. They are devoted to their families, patient with children, and generally get along well with other pets. They are calm indoors and content to spend much of their time relaxing near their favorite people."
      typicalSize="40–55 lbs fully grown"
      grooming="Regular cleaning of facial folds is essential to prevent skin irritation and infection. Their short coat requires only weekly brushing. Nail trimming, ear cleaning, and tail pocket cleaning should be part of their regular care routine."
      exercise="Low to moderate — short daily walks are sufficient. English Bulldogs are not high-energy dogs and should not be over-exercised, particularly in warm weather due to their brachycephalic nature."
      training="English Bulldogs can be stubborn, but they respond well to patient, consistent training with positive reinforcement. Early socialization helps develop a well-rounded, confident dog."
      familySuitability="Excellent family dogs. Their gentle, patient nature makes them wonderful with children of all ages. They are calm, devoted, and adaptable — equally at home in a house or apartment."
      considerations={[
        'English Bulldogs are brachycephalic — avoid exercise in heat or high humidity.',
        'Regular cleaning of facial folds and tail pockets is essential for their health.',
        'They can be prone to certain health conditions; responsible breeding and health testing matter.',
        'They are sensitive to extreme temperatures and should be kept in comfortable, climate-controlled environments.',
      ]}
      faqs={[
        { q: 'Are English Bulldogs good family dogs?', a: 'English Bulldogs are exceptional family dogs — gentle, patient, and devoted. Their calm nature makes them wonderful companions for families with children.' },
        { q: 'How much exercise do English Bulldogs need?', a: 'English Bulldogs need moderate exercise — short daily walks are ideal. They should not be over-exercised, especially in warm weather.' },
        { q: 'Do English Bulldogs drool a lot?', a: 'Yes, English Bulldogs are known for drooling, particularly around mealtimes. Keeping a small towel handy is a common Bulldog owner habit.' },
        { q: 'How long do English Bulldogs live?', a: 'English Bulldogs typically live 8–12 years. Responsible breeding, proper care, and regular veterinary attention contribute to a longer, healthier life.' },
      ]}
    />
  );
}
