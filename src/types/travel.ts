export type CurrencyCode = 'USD' | 'LKR' | 'EUR' | 'GBP';

export interface PreciousPlace {
  name: string;
  category: 'Heritage' | 'Nature' | 'Wildlife' | 'Beach' | 'Culture' | 'Adventure';
  description: string;
  highlightTag: string;
}

export interface District {
  id: string;
  name: string;
  sinhalaName: string;
  tamilName: string;
  province: string;
  region: 'Central Highlands' | 'Southern Coast' | 'Cultural Triangle' | 'Northern Heritage' | 'Eastern Paradise' | 'Western Hub';
  tagline: string;
  intro: string;
  image: string;
  bannerImage?: string;
  preciousPlaces: PreciousPlace[];
  bestSeason: string;
  weatherInfo: string;
  recommendedDays: number;
  transitTips: string;
  mustTryFood: string;
  budgetOverview: {
    budgetStayUSD: number;
    midStayUSD: number;
    luxuryStayUSD: number;
  };
}

export interface StayOption {
  id: string;
  name: string;
  district: string;
  tier: 'Small / Budget' | 'Medium / Comfort' | 'High / Luxury';
  tierCategory: 'small' | 'medium' | 'high';
  pricePerNightUSD: number;
  image: string;
  description: string;
  amenities: string[];
  rating: number;
  reviewCount: number;
  vibe: string;
}

export interface TransportOption {
  id: string;
  name: string;
  category: 'Train' | 'Private Chauffeur' | 'Call Taxi' | 'Tuk-Tuk' | 'Expressway Bus';
  tagline: string;
  description: string;
  approxRateUSD: string;
  approxRateLKR: string;
  bestFor: string;
  amenities: string[];
  bookingNote: string;
  image: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  country: string;
  avatar: string;
  rating: number;
  date: string;
  tripStyle: 'Couples Explorer' | 'Solo Backpacker' | 'Family Wildlife' | 'Luxury Heritage';
  visitedDistricts: string[];
  title: string;
  comment: string;
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Transport' | 'Hotels & Budget' | 'Visa & Safety';
  question: string;
  answer: string;
}

export interface PartnerSubmission {
  partnerType: 'taxi' | 'hotel' | 'traveler';
  name: string;
  phone: string;
  email: string;
  district: string;
  details: string;
  vehicleType?: string;
  propertyTier?: string;
  dates?: string;
  travelerCount?: number;
}
