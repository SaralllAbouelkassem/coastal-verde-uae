export interface Plant {
  id: string;
  name: string;
  nameAr: string;
  category: 'indoor' | 'outdoor' | 'mountain';
  price: number;
  image: string;
  description: string;
  careGuide: {
    watering: string;
    sunlight: string;
    temperature: string;
    humidity: string;
  };
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem {
  plant: Plant;
  quantity: number;
  giftMessage?: string;
}

export interface DeliveryArea {
  id: string;
  name: string;
  nameAr: string;
  fee: number;
  estimatedDays: string;
}

export interface QuizAnswer {
  questionId: string;
  answer: string;
}
