
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'Classiche' | 'Speciali' | 'Gourmet' | 'Bevande';
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface RecommendationRequest {
  mood: string;
  ingredients: string[];
}
