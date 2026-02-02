import { Plant, DeliveryArea } from '@/types';

export const plants: Plant[] = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    nameAr: 'مونستيرا ديليسيوسا',
    category: 'indoor',
    price: 189,
    image: 'https://images.unsplash.com/photo-1614594975525-e45c57e2a27b?w=600&h=800&fit=crop',
    description: 'The iconic Swiss Cheese Plant thrives in UAE AC environments. Perfect for living rooms and offices.',
    careGuide: {
      watering: 'Every 7-10 days, let soil dry between waterings',
      sunlight: 'Bright indirect light, avoid direct UAE sun',
      temperature: '18-28°C (AC friendly)',
      humidity: 'Medium to high, mist weekly'
    },
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Snake Plant',
    nameAr: 'نبات الثعبان',
    category: 'indoor',
    price: 85,
    image: 'https://images.unsplash.com/photo-1593482892540-64a544373d62?w=600&h=800&fit=crop',
    description: 'Hardy and air-purifying, perfect for beginners. Tolerates low light and irregular watering.',
    careGuide: {
      watering: 'Every 2-3 weeks, very drought tolerant',
      sunlight: 'Low to bright indirect light',
      temperature: '15-30°C (AC and heat tolerant)',
      humidity: 'Low to medium, no misting needed'
    },
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Fiddle Leaf Fig',
    nameAr: 'تين الكمان',
    category: 'indoor',
    price: 350,
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&h=800&fit=crop',
    description: 'Statement piece with large, sculptural leaves. Thrives in bright, air-conditioned rooms.',
    careGuide: {
      watering: 'Every 7-10 days when top soil is dry',
      sunlight: 'Bright indirect light, rotate weekly',
      temperature: '18-24°C (AC essential)',
      humidity: 'High, mist 2-3 times weekly'
    },
    inStock: true,
    featured: true
  },
  {
    id: '4',
    name: 'Bougainvillea',
    nameAr: 'الجهنمية',
    category: 'outdoor',
    price: 120,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop',
    description: 'Vibrant flowering plant that thrives in UAE heat. Perfect for villa gardens and balconies.',
    careGuide: {
      watering: 'Every 3-4 days in summer, weekly in winter',
      sunlight: 'Full sun, 6+ hours daily',
      temperature: '25-45°C (heat loving)',
      humidity: 'Low to medium, drought tolerant'
    },
    inStock: true,
    featured: true
  },
  {
    id: '5',
    name: 'Arabian Jasmine',
    nameAr: 'الفل العربي',
    category: 'outdoor',
    price: 95,
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=800&fit=crop',
    description: 'Fragrant white flowers, culturally significant in the Gulf. Thrives in Khor Fakkan\'s climate.',
    careGuide: {
      watering: 'Every 2-3 days, keep soil moist',
      sunlight: 'Full to partial sun',
      temperature: '20-40°C',
      humidity: 'Medium, tolerates dry air'
    },
    inStock: true
  },
  {
    id: '6',
    name: 'Date Palm (Dwarf)',
    nameAr: 'نخلة التمر القزمة',
    category: 'mountain',
    price: 450,
    image: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=600&h=800&fit=crop',
    description: 'Iconic UAE plant, perfect for mountain gardens. Compact variety ideal for residential spaces.',
    careGuide: {
      watering: 'Deep watering weekly',
      sunlight: 'Full sun',
      temperature: '20-50°C (extremely heat tolerant)',
      humidity: 'Low, desert adapted'
    },
    inStock: true,
    featured: true
  },
  {
    id: '7',
    name: 'ZZ Plant',
    nameAr: 'نبات زي زي',
    category: 'indoor',
    price: 110,
    image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=600&h=800&fit=crop',
    description: 'Practically indestructible with glossy leaves. Perfect for offices and low-light spaces.',
    careGuide: {
      watering: 'Every 2-3 weeks',
      sunlight: 'Low to bright indirect',
      temperature: '18-28°C',
      humidity: 'Low to medium'
    },
    inStock: true
  },
  {
    id: '8',
    name: 'Desert Rose',
    nameAr: 'وردة الصحراء',
    category: 'mountain',
    price: 165,
    image: 'https://images.unsplash.com/photo-1518882605630-8eb738c92578?w=600&h=800&fit=crop',
    description: 'Stunning succulent with pink blooms. Thrives in rocky mountain gardens.',
    careGuide: {
      watering: 'Every 2 weeks, drought tolerant',
      sunlight: 'Full sun',
      temperature: '25-45°C',
      humidity: 'Low'
    },
    inStock: true
  }
];

export const deliveryAreas: DeliveryArea[] = [
  {
    id: 'khor-fakkan',
    name: 'Khor Fakkan',
    nameAr: 'خورفكان',
    fee: 0,
    estimatedDays: 'Same day'
  },
  {
    id: 'kalba',
    name: 'Kalba',
    nameAr: 'كلباء',
    fee: 15,
    estimatedDays: '1-2 days'
  },
  {
    id: 'fujairah',
    name: 'Fujairah City',
    nameAr: 'الفجيرة',
    fee: 25,
    estimatedDays: '1-2 days'
  }
];

export const quizQuestions = [
  {
    id: 'light',
    question: 'How much natural light does your space get?',
    questionAr: 'كم مقدار الضوء الطبيعي في مكانك؟',
    options: [
      { value: 'low', label: 'Low - No direct sunlight', labelAr: 'منخفض - لا يوجد ضوء شمس مباشر' },
      { value: 'medium', label: 'Medium - Some indirect light', labelAr: 'متوسط - بعض الضوء غير المباشر' },
      { value: 'high', label: 'High - Lots of bright light', labelAr: 'عالي - الكثير من الضوء الساطع' }
    ]
  },
  {
    id: 'care',
    question: 'How often can you care for your plants?',
    questionAr: 'كم مرة يمكنك العناية بنباتاتك؟',
    options: [
      { value: 'low', label: 'Minimal - I forget often', labelAr: 'قليل - أنسى كثيراً' },
      { value: 'medium', label: 'Moderate - Weekly attention', labelAr: 'متوسط - اهتمام أسبوعي' },
      { value: 'high', label: 'Dedicated - Daily check-ins', labelAr: 'مخلص - متابعة يومية' }
    ]
  },
  {
    id: 'space',
    question: 'Where will your plant live?',
    questionAr: 'أين ستعيش نبتتك؟',
    options: [
      { value: 'indoor', label: 'Indoors with AC', labelAr: 'داخلي مع تكييف' },
      { value: 'outdoor', label: 'Outdoor balcony/garden', labelAr: 'شرفة/حديقة خارجية' },
      { value: 'mountain', label: 'Mountain-side garden', labelAr: 'حديقة جبلية' }
    ]
  }
];
