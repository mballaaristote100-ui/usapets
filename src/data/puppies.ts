export type PuppyStatus = 'Available' | 'Reservation Pending' | 'Reserved' | 'Found My Home';
export type PuppyGender = 'Male' | 'Female';
export type BreedSlug = 'teacup-poodle' | 'yorkie' | 'goldendoodle' | 'french-bulldog' | 'english-bulldog';

export interface PuppyParent {
  name: string;
  breed: string;
  image: string;
  imageAlt: string;
  description?: string;
}

export interface Puppy {
  id: string;
  slug: string;
  name: string;
  breed: string;
  breedSlug: BreedSlug;
  gender: PuppyGender;
  dateOfBirth: string;
  ageWeeks: number;
  color: string;
  expectedAdultSize: string;
  price: number;
  depositAmount: number;
  status: PuppyStatus;
  shortDescription: string;
  fullDescription: string;
  featuredImage: string;
  featuredImageAlt: string;
  galleryImages: {src: string;alt: string;}[];
  vetChecked: boolean;
  vaccinationStatus: string;
  dewormingStatus: string;
  microchipStatus: boolean;
  healthGuarantee: string;
  mother?: PuppyParent;
  father?: PuppyParent;
  featured: boolean;
  deliveryAvailable: boolean;
  whatComesWithPuppy: string[];
  personality: string[];
}

export const PUPPIES: Puppy[] = [
{
  id: 'puppy-001',
  slug: 'bella',
  name: 'Bella',
  breed: 'Teacup Poodle',
  breedSlug: 'teacup-poodle',
  gender: 'Female',
  dateOfBirth: '2026-06-10',
  ageWeeks: 10,
  color: 'Apricot',
  expectedAdultSize: '4–5 lbs',
  price: 550,
  depositAmount: 200,
  status: 'Available',
  shortDescription: 'Sweet and spirited, Bella loves cuddles and playtime in equal measure.',
  fullDescription:
  'Bella is an absolutely enchanting apricot Teacup Poodle with the most expressive eyes you\'ll ever see. She was born into a warm, loving home environment and has been socialized with children, other pets, and everyday household sounds from day one. Bella is bright, affectionate, and already showing the classic Poodle intelligence — she learned her name within her first week. She thrives on human connection and will make an ideal companion for a family or individual who wants a small, smart, endlessly loving dog.',
  featuredImage: "/assets/images/Poodle_for_sale-1787050593549.jpg",
  featuredImageAlt: 'Apricot Teacup Poodle puppy for sale - Bella',
  galleryImages: [
  { src: "/assets/images/Poodle_for_sale-1787050593549.jpg", alt: 'Bella the apricot Teacup Poodle puppy for sale' },
  { src: "/assets/images/Apricot_poodle-1787050595804.jpg", alt: 'Bella the apricot Poodle puppy close-up portrait' },
  { src: "/assets/images/25403185394133347-1787050597856.jpg", alt: 'Bella the Teacup Poodle puppy sitting' }],

  vetChecked: true,
  vaccinationStatus: 'Up to date for age',
  dewormingStatus: 'Completed',
  microchipStatus: true,
  healthGuarantee: '1-year genetic health guarantee',
  mother: {
    name: 'Sophie',
    breed: 'Teacup Poodle',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_141b090e6-1786989514629.png",
    imageAlt: 'Sophie the mother Teacup Poodle with apricot coat',
    description: 'Gentle, 4.2 lbs, champion bloodline'
  },
  father: {
    name: 'Coco',
    breed: 'Teacup Poodle',
    image: "https://images.unsplash.com/photo-1652487955075-cd14238cf20c",
    imageAlt: 'Coco the father Teacup Poodle with cream coat',
    description: 'Playful, 4.8 lbs, health tested'
  },
  featured: true,
  deliveryAvailable: true,
  whatComesWithPuppy: [
  'Health records & vaccination documentation',
  'Veterinary health certificate',
  'Microchip registration paperwork',
  'Breeder care guide & nutrition recommendations',
  'Starter food sample',
  '1-year genetic health guarantee document'],

  personality: ['Affectionate', 'Intelligent', 'Playful', 'Gentle']
},
{
  id: 'puppy-002',
  slug: 'oliver',
  name: 'Oliver',
  breed: 'Yorkie',
  breedSlug: 'yorkie',
  gender: 'Male',
  dateOfBirth: '2026-06-18',
  ageWeeks: 9,
  color: 'Tan & Steel Blue',
  expectedAdultSize: '5–7 lbs',
  price: 500,
  depositAmount: 200,
  status: 'Available',
  shortDescription: 'Bold and curious, Oliver has a big personality in a tiny package.',
  fullDescription:
  'Oliver is a classic Yorkshire Terrier with that gorgeous tan and steel-blue silky coat that the breed is beloved for. Despite his compact size, Oliver carries himself with confidence — he loves to explore every corner of a room and greet every visitor with enthusiasm. He has been raised alongside children and is wonderfully socialized. Oliver enjoys short bursts of play followed by warm, cozy naps on a soft lap. His intelligence and eagerness to please make him a joy to train.',
  featuredImage: "/assets/images/yorkie-puppy-for-sale-male-21334-1-1787050473882.webp",
  featuredImageAlt: 'Oliver the Yorkie puppy for sale - male Yorkshire Terrier photo 1',
  galleryImages: [
  { src: "/assets/images/yorkie-puppy-for-sale-male-21334-1-1787050473882.webp", alt: 'Oliver the Yorkie puppy for sale - male Yorkshire Terrier photo 1' },
  { src: "/assets/images/yorkie-puppy-for-sale-male-21334-2-1787050490136.webp", alt: 'Oliver the Yorkie puppy for sale - male Yorkshire Terrier photo 2' },
  { src: "/assets/images/yorkie-puppy-for-sale-male-21334-3-1787050493576.webp", alt: 'Oliver the Yorkie puppy for sale - male Yorkshire Terrier photo 3' },
  { src: "/assets/images/yorkie-puppy-for-sale-male-21334-4-1787050498517.webp", alt: 'Oliver the Yorkie puppy for sale - male Yorkshire Terrier photo 4' }],

  vetChecked: true,
  vaccinationStatus: 'Up to date for age',
  dewormingStatus: 'Completed',
  microchipStatus: true,
  healthGuarantee: '1-year genetic health guarantee',
  featured: false,
  deliveryAvailable: true,
  whatComesWithPuppy: [
  'Health records & vaccination documentation',
  'Veterinary health certificate',
  'Microchip registration paperwork',
  'Breeder care guide',
  'Starter food sample'],

  personality: ['Bold', 'Curious', 'Loyal', 'Spirited']
},
{
  id: 'puppy-003',
  slug: 'luna',
  name: 'Luna',
  breed: 'Goldendoodle',
  breedSlug: 'goldendoodle',
  gender: 'Female',
  dateOfBirth: '2026-05-28',
  ageWeeks: 11,
  color: 'Golden Cream',
  expectedAdultSize: '45–55 lbs',
  price: 650,
  depositAmount: 200,
  status: 'Available',
  shortDescription: 'Luna is a fluffy golden dream — gentle, social, and endlessly joyful.',
  fullDescription:
  'Luna is a stunning golden cream Goldendoodle (F1B) with the most beautifully wavy, low-shedding coat. She comes from two health-tested parents and has been raised in a family home with children and other dogs. Luna\'s temperament is exceptional — she is calm, affectionate, and incredibly social. She has already begun basic leash training and responds beautifully to her name. Luna would thrive in an active family environment and absolutely loves outdoor adventures followed by evening cuddles.',
  featuredImage: "/assets/images/Golden-Doodle-20074-2-1787053069791.webp",
  featuredImageAlt: 'Luna the Golden Doodle puppy featured photo',
  galleryImages: [
  { src: "/assets/images/Golden-Doodle-20074-2-1787053069791.webp", alt: 'Luna the Golden Doodle puppy photo 1' },
  { src: "/assets/images/Golden-Doodle-20074-3-1787053072655.webp", alt: 'Luna the Golden Doodle puppy photo 2' }],

  vetChecked: true,
  vaccinationStatus: 'Up to date for age',
  dewormingStatus: 'Completed',
  microchipStatus: true,
  healthGuarantee: '2-year genetic health guarantee',
  mother: {
    name: 'Honey',
    breed: 'Golden Retriever',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_136bb6459-1772134257663.png",
    imageAlt: 'Honey the Golden Retriever mother dog with warm golden coat',
    description: 'OFA hip certified, gentle temperament'
  },
  father: {
    name: 'Duke',
    breed: 'Standard Poodle',
    image: "https://images.unsplash.com/photo-1647126224663-8e754f6fd026",
    imageAlt: 'Duke the Standard Poodle father with cream coat',
    description: 'Health tested, low-shedding coat'
  },
  featured: true,
  deliveryAvailable: true,
  whatComesWithPuppy: [
  'Health records & vaccination documentation',
  'Veterinary health certificate',
  'OFA parent health testing documentation',
  'Microchip registration paperwork',
  'Breeder care guide & nutrition recommendations',
  'Starter food sample',
  '2-year genetic health guarantee document'],

  personality: ['Gentle', 'Social', 'Joyful', 'Intelligent']
},
{
  id: 'puppy-004',
  slug: 'max',
  name: 'Max',
  breed: 'French Bulldog',
  breedSlug: 'french-bulldog',
  gender: 'Male',
  dateOfBirth: '2026-06-05',
  ageWeeks: 10,
  color: 'Fawn',
  expectedAdultSize: '20–28 lbs',
  price: 800,
  depositAmount: 200,
  status: 'Reservation Pending',
  shortDescription: 'Max is a laid-back charmer with those iconic bat ears and a heart of gold.',
  fullDescription:
  'Max is a beautifully structured fawn French Bulldog with the most expressive bat ears and a compact, muscular build. He has a wonderfully calm, affectionate temperament and loves nothing more than being close to his people. Max has been raised in a climate-controlled home environment and is well-suited to apartment living. He is playful but not hyperactive — perfectly balanced for families, couples, or individuals who want a devoted companion who doesn\'t need hours of exercise.',
  featuredImage: "/assets/images/26042-1-1787051917213.webp",
  featuredImageAlt: 'Max the fawn French Bulldog puppy featured photo',
  galleryImages: [
  { src: "/assets/images/26042-1-1787051917213.webp", alt: 'Max the fawn French Bulldog puppy photo 1' },
  { src: "/assets/images/26042-3-1787051918864.webp", alt: 'Max the fawn French Bulldog puppy photo 2' },
  { src: "/assets/images/26042-2-1787051921409.webp", alt: 'Max the fawn French Bulldog puppy photo 3' }],

  vetChecked: true,
  vaccinationStatus: 'Up to date for age',
  dewormingStatus: 'Completed',
  microchipStatus: true,
  healthGuarantee: '1-year genetic health guarantee',
  featured: false,
  deliveryAvailable: true,
  whatComesWithPuppy: [
  'Health records & vaccination documentation',
  'Veterinary health certificate',
  'Microchip registration paperwork',
  'Breeder care guide',
  'Starter food sample'],

  personality: ['Calm', 'Affectionate', 'Adaptable', 'Charming']
},
{
  id: 'puppy-005',
  slug: 'daisy',
  name: 'Daisy',
  breed: 'Yorkie',
  breedSlug: 'yorkie',
  gender: 'Female',
  dateOfBirth: '2026-06-22',
  ageWeeks: 8,
  color: 'Gold & Parti',
  expectedAdultSize: '4–6 lbs',
  price: 550,
  depositAmount: 200,
  status: 'Available',
  shortDescription: 'Daisy is a delicate parti Yorkie with a surprisingly feisty, loving spirit.',
  fullDescription:
  'Daisy is a rare and beautiful parti-colored Yorkie with a white, gold, and black coat that is simply stunning. She is petite even for the breed and carries herself with an endearing combination of daintiness and determination. Daisy loves to be the center of attention and will happily perform her best tricks for treats. She has been lovingly hand-raised and is extremely well-socialized for her age. Daisy would thrive as a cherished companion in a home where she can receive plenty of attention and affection.',
  featuredImage: "/assets/images/Yorkie_puppy_golddust-1787048859972.jpg",
  featuredImageAlt: 'Daisy the golddust Yorkie puppy with beautiful gold coat',
  galleryImages: [
  { src: "/assets/images/Yorkie_puppy_golddust-1787048859972.jpg", alt: 'Daisy the golddust Yorkie puppy with beautiful gold coat' },
  { src: "/assets/images/Teacup_Yorkie_puppy-1787048863627.jpg", alt: 'Daisy the teacup Yorkie puppy close-up portrait' }],

  vetChecked: true,
  vaccinationStatus: 'Up to date for age',
  dewormingStatus: 'Completed',
  microchipStatus: false,
  healthGuarantee: '1-year genetic health guarantee',
  featured: false,
  deliveryAvailable: true,
  whatComesWithPuppy: [
  'Health records & vaccination documentation',
  'Veterinary health certificate',
  'Breeder care guide',
  'Starter food sample'],

  personality: ['Feisty', 'Loving', 'Attentive', 'Bright']
},
{
  id: 'puppy-006',
  slug: 'winston',
  name: 'Winston',
  breed: 'English Bulldog',
  breedSlug: 'english-bulldog',
  gender: 'Male',
  dateOfBirth: '2026-05-20',
  ageWeeks: 13,
  color: 'Brindle & White',
  expectedAdultSize: '45–55 lbs',
  price: 850,
  depositAmount: 200,
  status: 'Available',
  shortDescription: 'Winston is a dignified, wrinkly gentleman with a surprisingly playful side.',
  fullDescription:
  'Winston is an absolutely classic English Bulldog — from his wrinkled, expressive face to his wide, confident stance. Despite the breed\'s famously stubborn reputation, Winston is remarkably easygoing and gentle. He has been raised with children and gets along beautifully with other pets. Winston is at his happiest lounging next to his favorite person but will happily join in a gentle play session. He has been carefully bred for temperament and structure, and his compact, well-proportioned build is a testament to responsible breeding.',
  featuredImage: "/assets/images/English-Bulldog-160221-2-1787053489849.webp",
  featuredImageAlt: 'Winston the English Bulldog puppy featured photo',
  galleryImages: [
  { src: "/assets/images/English-Bulldog-160221-2-1787053489849.webp", alt: 'Winston the English Bulldog puppy photo 1' },
  { src: "/assets/images/English-Bulldog-160221-3-1787053489872.webp", alt: 'Winston the English Bulldog puppy photo 2' },
  { src: "/assets/images/English-Bulldog-160221-4-1787053492176.webp", alt: 'Winston the English Bulldog puppy photo 3' },
  { src: "/assets/images/English-Bulldog-160221-5-1787053494561.webp", alt: 'Winston the English Bulldog puppy photo 4' }],

  vetChecked: true,
  vaccinationStatus: 'Up to date for age',
  dewormingStatus: 'Completed',
  microchipStatus: true,
  healthGuarantee: '1-year genetic health guarantee',
  featured: false,
  deliveryAvailable: true,
  whatComesWithPuppy: [
  'Health records & vaccination documentation',
  'Veterinary health certificate',
  'Microchip registration paperwork',
  'Breeder care guide',
  'Starter food sample'],

  personality: ['Dignified', 'Gentle', 'Loyal', 'Easygoing']
},
{
  id: 'puppy-007',
  slug: 'chloe',
  name: 'Chloe',
  breed: 'Teacup Poodle',
  breedSlug: 'teacup-poodle',
  gender: 'Female',
  dateOfBirth: '2026-07-01',
  ageWeeks: 7,
  color: 'White',
  expectedAdultSize: '3–4 lbs',
  price: 600,
  depositAmount: 200,
  status: 'Available',
  shortDescription: 'Chloe is a pristine white cloud of a puppy — delicate, sweet, and devoted.',
  fullDescription:
  'Chloe is a breathtakingly beautiful white Teacup Poodle with a perfectly round, fluffy coat and the most soulful dark eyes. She is extremely small even for the Teacup variety and will be an ideal companion for someone who wants the ultimate lap dog. Chloe is gentle, quiet, and deeply affectionate — she loves being carried and will happily spend hours nestled against her person. She has been raised with exceptional care and is already showing wonderful socialization skills.',
  featuredImage: '/assets/images/Teacup_poodle-1786989425502.jpg',
  featuredImageAlt: 'Chloe the white Teacup Poodle puppy',
  galleryImages: [
  { src: '/assets/images/Teacup_poodle-1786989425502.jpg', alt: 'Chloe the white Teacup Poodle puppy' },
  { src: '/assets/images/Cute_and_adorable_white_teacup_poodle_for_sale-1786989427541.jpg', alt: 'Chloe the adorable white Teacup Poodle for sale' }],

  vetChecked: true,
  vaccinationStatus: 'Up to date for age',
  dewormingStatus: 'Completed',
  microchipStatus: false,
  healthGuarantee: '1-year genetic health guarantee',
  featured: false,
  deliveryAvailable: true,
  whatComesWithPuppy: [
  'Health records & vaccination documentation',
  'Veterinary health certificate',
  'Breeder care guide',
  'Starter food sample'],

  personality: ['Gentle', 'Devoted', 'Quiet', 'Sweet']
},
{
  id: 'puppy-008',
  slug: 'bear',
  name: 'Bear',
  breed: 'Goldendoodle',
  breedSlug: 'goldendoodle',
  gender: 'Male',
  dateOfBirth: '2026-05-30',
  ageWeeks: 11,
  color: 'Chocolate',
  expectedAdultSize: '50–60 lbs',
  price: 500,
  depositAmount: 200,
  status: 'Reserved',
  shortDescription: 'Bear is a big, lovable chocolate Goldendoodle who lives up to his name.',
  fullDescription:
  'Bear is a stunning chocolate Goldendoodle with a rich, wavy coat and an absolutely enormous heart. True to his name, he is big, warm, and endlessly huggable. Bear has an exceptional temperament — he is confident without being boisterous, affectionate without being clingy, and smart enough to learn quickly. He has been raised in a family home and is excellent with children and other animals. Bear has already been reserved by a wonderful family in Texas.',
  featuredImage: "/assets/images/26091_Male_Goldendoodle_HeavenlyPuppies_1-1787052827691.webp",
  featuredImageAlt: 'Bear the male Goldendoodle puppy featured photo',
  galleryImages: [
  { src: "/assets/images/26091_Male_Goldendoodle_HeavenlyPuppies_1-1787052827691.webp", alt: 'Bear the male Goldendoodle puppy photo 1' },
  { src: "/assets/images/26091_Male_Goldendoodle_HeavenlyPuppies_2-1787052830612.webp", alt: 'Bear the male Goldendoodle puppy photo 2' },
  { src: "/assets/images/26091_Male_Goldendoodle_HeavenlyPuppies_3-1787052837219.webp", alt: 'Bear the male Goldendoodle puppy photo 3' }],

  vetChecked: true,
  vaccinationStatus: 'Up to date for age',
  dewormingStatus: 'Completed',
  microchipStatus: true,
  healthGuarantee: '2-year genetic health guarantee',
  featured: false,
  deliveryAvailable: true,
  whatComesWithPuppy: [
  'Health records & vaccination documentation',
  'Veterinary health certificate',
  'Microchip registration paperwork',
  'Breeder care guide'],

  personality: ['Confident', 'Affectionate', 'Smart', 'Gentle']
},
{
  id: 'puppy-009',
  slug: 'penny',
  name: 'Penny',
  breed: 'French Bulldog',
  breedSlug: 'french-bulldog',
  gender: 'Female',
  dateOfBirth: '2026-06-08',
  ageWeeks: 10,
  color: 'Lilac Fawn',
  expectedAdultSize: '18–24 lbs',
  price: 850,
  depositAmount: 200,
  status: 'Available',
  shortDescription: 'Penny is a rare lilac fawn Frenchie with a velvet-soft coat and sweet soul.',
  fullDescription:
  'Penny is an absolutely extraordinary lilac fawn French Bulldog — her coat has that beautiful, rare dilute coloring that catches the light in the most stunning way. She is petite for the breed and has the most expressive, wide-set eyes. Penny is calm, affectionate, and loves nothing more than snuggling. She has been raised in a warm family environment and is well-socialized with people of all ages. Penny would be an ideal companion for someone who appreciates a rare, beautifully colored Frenchie with an equally beautiful personality.',
  featuredImage: "/assets/images/25171-1-1787051255597.webp",
  featuredImageAlt: 'Penny the lilac fawn French Bulldog puppy',
  galleryImages: [
  { src: "/assets/images/25171-1-1787051255597.webp", alt: 'Penny the lilac fawn French Bulldog puppy' },
  { src: "/assets/images/25171-2-1787051274209.webp", alt: 'Penny the French Bulldog puppy second photo' },
  { src: "/assets/images/25171-3-1787051282998.webp", alt: 'Penny the French Bulldog puppy third photo' }],

  vetChecked: true,
  vaccinationStatus: 'Up to date for age',
  dewormingStatus: 'Completed',
  microchipStatus: true,
  healthGuarantee: '1-year genetic health guarantee',
  featured: false,
  deliveryAvailable: true,
  whatComesWithPuppy: [
  'Health records & vaccination documentation',
  'Veterinary health certificate',
  'Microchip registration paperwork',
  'Breeder care guide',
  'Starter food sample'],

  personality: ['Calm', 'Sweet', 'Gentle', 'Rare']
},
{
  id: 'puppy-010',
  slug: 'rosie',
  name: 'Rosie',
  breed: 'English Bulldog',
  breedSlug: 'english-bulldog',
  gender: 'Female',
  dateOfBirth: '2026-05-25',
  ageWeeks: 12,
  color: 'Red & White',
  expectedAdultSize: '40–50 lbs',
  price: 900,
  depositAmount: 200,
  status: 'Available',
  shortDescription: 'Rosie is a classic red-and-white English Bulldog with a gentle, steady nature.',
  fullDescription:
  'Rosie is a gorgeous red and white English Bulldog with a wonderfully classic look and a temperament to match. She is calm, steady, and deeply affectionate — the kind of dog who will quietly follow you from room to room just to be near you. Rosie has been raised in a home with children and other pets and has shown nothing but patience and gentleness with everyone she meets. She is ready to join her forever family and bring that unmistakable Bulldog warmth and loyalty into a loving home.',
  featuredImage: "/assets/images/English-Bulldog-140935-2-1787053238978.webp",
  featuredImageAlt: 'Rosie the red and white English Bulldog puppy',
  galleryImages: [
    { src: "/assets/images/English-Bulldog-140935-2-1787053238978.webp", alt: 'Rosie the English Bulldog - front view' },
    { src: "/assets/images/English-Bulldog-140935-3-1787053240811.webp", alt: 'Rosie the English Bulldog - side view' },
    { src: "/assets/images/English-Bulldog-140935-4-1787053243071.webp", alt: 'Rosie the English Bulldog - close up' },
    { src: "/assets/images/English-Bulldog-140935-5-1787053246365.webp", alt: 'Rosie the English Bulldog - full body' }
  ],

  vetChecked: true,
  vaccinationStatus: 'Up to date for age',
  dewormingStatus: 'Completed',
  microchipStatus: true,
  healthGuarantee: '1-year genetic health guarantee',
  featured: false,
  deliveryAvailable: true,
  whatComesWithPuppy: [
  'Health records & vaccination documentation',
  'Veterinary health certificate',
  'Microchip registration paperwork',
  'Breeder care guide'],

  personality: ['Calm', 'Loyal', 'Gentle', 'Steady']
},
{
  id: 'puppy-011',
  slug: 'archie',
  name: 'Archie',
  breed: 'Yorkie',
  breedSlug: 'yorkie',
  gender: 'Male',
  dateOfBirth: '2026-06-25',
  ageWeeks: 8,
  color: 'Traditional Tan & Blue',
  expectedAdultSize: '5–7 lbs',
  price: 450,
  depositAmount: 200,
  status: 'Available',
  shortDescription: 'Archie is a confident, lively Yorkie boy who loves adventure and belly rubs.',
  fullDescription:
  'Archie is a traditionally colored Yorkshire Terrier with that beautiful, silky tan and steel-blue coat. He is wonderfully confident and loves to explore — no corner of a room goes uninvestigated when Archie is around. Despite his small size, Archie has a big, bold personality and a surprisingly deep bark. He is affectionate with his family and has been well-socialized from birth. Archie would suit a family or individual who enjoys an energetic, character-filled companion in a small, convenient package.',
  featuredImage: "/assets/images/Yorkie_Puppy_for_Sale_-_Heavenly_Puppies-1787047904186.jpg",
  featuredImageAlt: 'Archie the Yorkie puppy for sale',
  galleryImages: [
  { src: "/assets/images/Yorkie_Puppy_for_Sale_-_Heavenly_Puppies-1787047904186.jpg", alt: 'Archie the Yorkie puppy for sale' },
  { src: "/assets/images/Beautiful_Teacup_Yorkie_Puppies-1787047906721.jpg", alt: 'Beautiful teacup Yorkie puppy Archie' },
  { src: "/assets/images/Adorable_Female_TeaCup_Yorkie_Puppy_Available-1787047911447.jpg", alt: 'Adorable teacup Yorkie puppy Archie' }],

  vetChecked: true,
  vaccinationStatus: 'Up to date for age',
  dewormingStatus: 'Completed',
  microchipStatus: false,
  healthGuarantee: '1-year genetic health guarantee',
  featured: false,
  deliveryAvailable: true,
  whatComesWithPuppy: [
  'Health records & vaccination documentation',
  'Veterinary health certificate',
  'Breeder care guide',
  'Starter food sample'],

  personality: ['Confident', 'Lively', 'Bold', 'Affectionate']
},
{
  id: 'puppy-012',
  slug: 'honey',
  name: 'Honey',
  breed: 'Goldendoodle',
  breedSlug: 'goldendoodle',
  gender: 'Female',
  dateOfBirth: '2026-06-02',
  ageWeeks: 11,
  color: 'Caramel',
  expectedAdultSize: '40–50 lbs',
  price: 580,
  depositAmount: 200,
  status: 'Found My Home',
  shortDescription: 'Honey found her forever family in Colorado — a beautiful match.',
  fullDescription:
  'Honey was a stunning caramel Goldendoodle who has now found her forever family. She has gone to a wonderful home in Colorado where she will have plenty of space to run and a family who adores her.',
  featuredImage: "/assets/images/mini-goldendoodle-puppy-for-sale-male-red-24287-1-1787052389551.webp",
  featuredImageAlt: 'Honey the caramel Mini Goldendoodle puppy for sale',
  galleryImages: [
  { src: "/assets/images/mini-goldendoodle-puppy-for-sale-male-red-24287-1-1787052389551.webp", alt: 'Honey the caramel Mini Goldendoodle puppy for sale - photo 1' },
  { src: "/assets/images/mini-goldendoodle-puppy-for-sale-male-red-24287-3-1787052391504.webp", alt: 'Honey the caramel Mini Goldendoodle puppy for sale - photo 2' },
  { src: "/assets/images/mini-goldendoodle-puppy-for-sale-male-red-24287-2-1787052393581.webp", alt: 'Honey the caramel Mini Goldendoodle puppy for sale - photo 3' }],

  vetChecked: true,
  vaccinationStatus: 'Up to date for age',
  dewormingStatus: 'Completed',
  microchipStatus: true,
  healthGuarantee: '2-year genetic health guarantee',
  featured: false,
  deliveryAvailable: true,
  whatComesWithPuppy: [],
  personality: ['Gentle', 'Joyful', 'Social']
}];


export const BREEDS = [
{
  id: 'breed-teacup-poodle',
  slug: 'teacup-poodle' as BreedSlug,
  name: 'Teacup Poodle',
  tagline: 'Intelligent · Hypoallergenic · Devoted',
  shortDescription: 'Brilliant minds in the tiniest packages. Teacup Poodles are loving, low-shedding companions perfect for any home.',
  image: '/assets/images/Teacup_Puppies_for_Adoption_in_Canada___Little_Cups-1787045544475.jpg',
  imageAlt: 'Teacup Poodle puppies for adoption',
  href: '/teacup-poodles'
},
{
  id: 'breed-yorkie',
  slug: 'yorkie' as BreedSlug,
  name: 'Yorkie',
  tagline: 'Bold · Silky · Spirited',
  shortDescription: 'Yorkshire Terriers pack a huge personality into a tiny, elegant frame — bold, loving, and endlessly entertaining.',
  image: '/assets/images/Teacup_Yorkie_Puppies_for_sale__Tennessee__Heartland_Ranch_Kennels-1787045815314.jpg',
  imageAlt: 'Teacup Yorkie puppies for sale at Heartland Ranch Kennels in Tennessee',
  href: '/yorkie-puppies'
},
{
  id: 'breed-goldendoodle',
  slug: 'goldendoodle' as BreedSlug,
  name: 'Goldendoodle',
  tagline: 'Gentle · Family-Friendly · Low-Shedding',
  shortDescription: 'The beloved Golden Retriever and Poodle cross — joyful, intelligent, and wonderfully suited to family life.',
  image: '/assets/images/Available_Goldendoodle_Puppies___Family-Raised___Healthy-1787045895691.jpg',
  imageAlt: 'Available Goldendoodle puppies family-raised and healthy',
  href: '/goldendoodles'
},
{
  id: 'breed-french-bulldog',
  slug: 'french-bulldog' as BreedSlug,
  name: 'French Bulldog',
  tagline: 'Adaptable · Charming · Low-Energy',
  shortDescription: 'French Bulldogs are devoted, easygoing companions who thrive in any living situation — city apartments included.',
  image: '/assets/images/Adorable_French_Bulldog_Puppies________Cute_Frenchie_Puppies_-1787045972088.jpg',
  imageAlt: 'Adorable French Bulldog puppies cute Frenchie puppies',
  href: '/french-bulldogs'
},
{
  id: 'breed-english-bulldog',
  slug: 'english-bulldog' as BreedSlug,
  name: 'English Bulldog',
  tagline: 'Loyal · Dignified · Gentle',
  shortDescription: 'Classic, dignified, and endlessly loyal — English Bulldogs are gentle souls who love their families deeply.',
  image: '/assets/images/Get_your_shirt_now__link_on_my_bio____-1787046283624.jpg',
  imageAlt: 'English Bulldog breed category image',
  href: '/english-bulldogs'
}];


export const TESTIMONIALS = [
{
  id: 'testimonial-001',
  customerName: 'Sarah M.',
  location: 'Austin, TX',
  puppyName: 'Bella',
  breed: 'Teacup Poodle',
  review:
  'From the moment I found USA Pets for Home, I knew this was different. The level of care that went into raising Bella is evident every single day. She arrived healthy, happy, and already so well-socialized. Our whole family is completely in love.',
  rating: 5,
  date: '2026-07-15',
  customerImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1ae0b1d6a-1773951010975.png",
  customerImageAlt: 'Sarah M. smiling customer from Austin Texas',
  puppyImage: "https://img.rocket.new/generatedImages/rocket_gen_img_12507fbff-1772137623863.png",
  puppyImageAlt: 'Bella the apricot Teacup Poodle puppy'
},
{
  id: 'testimonial-002',
  customerName: 'James & Priya K.',
  location: 'Chicago, IL',
  puppyName: 'Luna',
  breed: 'Goldendoodle',
  review:
  'We had been searching for months for a reputable Goldendoodle breeder and we are so grateful we found this team. Luna is absolutely perfect — healthy, beautiful, and so wonderfully tempered. The application process was smooth and the communication was excellent throughout.',
  rating: 5,
  date: '2026-07-28',
  customerImage: "https://img.rocket.new/generatedImages/rocket_gen_img_152821e91-1772083388361.png",
  customerImageAlt: 'James and Priya K. happy couple from Chicago Illinois',
  puppyImage: "https://images.unsplash.com/photo-1578070435803-2eb3ce5653c5",
  puppyImageAlt: 'Luna the golden cream Goldendoodle puppy in garden'
},
{
  id: 'testimonial-003',
  customerName: 'Rebecca T.',
  location: 'Nashville, TN',
  puppyName: 'Oliver',
  breed: 'Yorkie',
  review:
  "Oliver is the most wonderful little companion. He arrived exactly as described — confident, curious, and already used to being handled. The health documentation was thorough and the breeder was incredibly responsive to every question I had. I cannot recommend them highly enough.",
  rating: 5,
  date: '2026-08-05',
  customerImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1c2e96937-1786989516010.png",
  customerImageAlt: 'Rebecca T. smiling customer from Nashville Tennessee',
  puppyImage: "https://images.unsplash.com/photo-1620050744152-52160f8f9079",
  puppyImageAlt: 'Oliver the tan and blue Yorkie puppy on wooden floor'
},
{
  id: 'testimonial-004',
  customerName: 'Marcus & Diane W.',
  location: 'Denver, CO',
  puppyName: 'Winston',
  breed: 'English Bulldog',
  review:
  "Winston has been in our home for two months now and we are completely obsessed. He is exactly what we hoped for — gentle, calm, and absolutely hilarious. The entire experience from first contact to bringing him home was professional, warm, and trustworthy.",
  rating: 5,
  date: '2026-07-10',
  customerImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1634ad9bc-1772355181266.png",
  customerImageAlt: 'Marcus and Diane W. couple from Denver Colorado',
  puppyImage: "https://images.unsplash.com/photo-1693897004115-7fbd4f1ae96e",
  puppyImageAlt: 'Winston the brindle English Bulldog puppy on grass'
}];


export const FAQS = [
{
  id: 'faq-001',
  category: 'Finding a Puppy',
  question: 'How do I know which puppy is right for my family?',
  answer:
  "Browse our available puppies and read each profile carefully — we've included detailed personality descriptions, temperament notes, and breed information to help you find the best match. You can also use our Puppy Finder tool on the homepage to filter by size, breed, and lifestyle preferences. If you're still unsure, reach out to us at contact@usapetsforhome.com and we'll be happy to help guide you."
},
{
  id: 'faq-002',
  category: 'Applications',
  question: 'What happens after I submit my application?',
  answer:
  "After you submit your application, our team reviews it carefully — typically within 1–3 business days. We'll contact you using the information you provided to discuss your application and answer any questions. If approved, you'll receive instructions for completing your reservation deposit."
},
{
  id: 'faq-003',
  category: 'Reservations',
  question: 'Does the reservation deposit hold my puppy?',
  answer:
  "Yes — once your application is approved and your reservation deposit is received, your puppy is officially held for you. The deposit is applied toward the total purchase price of your puppy."
},
{
  id: 'faq-004',
  category: 'Health & Care',
  question: 'What health documentation comes with my puppy?',
  answer:
  "Each puppy comes with health records, vaccination documentation current for their age, deworming records, and a veterinary health certificate. Health guarantee terms are detailed on each puppy's profile. Please review the specific documentation listed on your puppy's page."
},
{
  id: 'faq-005',
  category: 'Pickup & Delivery',
  question: 'Do you offer nationwide delivery?',
  answer:
  "Yes — we offer several delivery options including ground transportation and puppy nanny flight delivery depending on your location. We serve families across the continental United States. Contact us to discuss the delivery options available for your area."
},
{
  id: 'faq-006',
  category: 'Waitlist',
  question: 'Can I join a waitlist if there are no available puppies I love?',
  answer:
  "Absolutely. You can join our waitlist and specify your preferred breed, gender, and timeline. We'll contact you when a puppy matching your preferences becomes available. Joining the waitlist does not commit you to a purchase."
}];


export function getPuppyAge(dateOfBirth: string): string {
  const dob = new Date(dateOfBirth);
  const now = new Date('2026-08-17');
  const diffMs = now.getTime() - dob.getTime();
  const diffWeeks = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 7));
  if (diffWeeks < 1) return 'Newborn';
  if (diffWeeks === 1) return '1 week old';
  return `${diffWeeks} weeks old`;
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price);
}