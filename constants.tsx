
import { MenuItem, Review } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: "Margherita",
    description: "Pomodoro San Marzano DOP, mozzarella di bufala, basilico fresco, olio EVO.",
    price: 8.50,
    image: "https://picsum.photos/id/102/600/400",
    category: 'Classiche'
  },
  {
    id: 2,
    name: "Diavola",
    description: "Pomodoro, mozzarella, salame piccante calabrese, olive taggiasche.",
    price: 10.00,
    image: "https://picsum.photos/id/111/600/400",
    category: 'Classiche'
  },
  {
    id: 3,
    name: "Split Special",
    description: "Crema di zucca, burrata pugliese, granella di pistacchio e mortadella Bologna.",
    price: 14.00,
    image: "https://picsum.photos/id/139/600/400",
    category: 'Speciali'
  },
  {
    id: 4,
    name: "Quattro Formaggi",
    description: "Mozzarella, gorgonzola piccante, taleggio, scaglie di pecorino romano.",
    price: 11.50,
    image: "https://picsum.photos/id/149/600/400",
    category: 'Classiche'
  },
  {
    id: 5,
    name: "Tartufata Gourmet",
    description: "Base bianca, crema al tartufo nero, porcini freschi, lardo di colonnata.",
    price: 16.50,
    image: "https://picsum.photos/id/163/600/400",
    category: 'Gourmet'
  },
  {
    id: 6,
    name: "Napoletana",
    description: "Pomodoro, aglio, origano, acciughe del Cantabrico, capperi.",
    price: 9.50,
    image: "https://picsum.photos/id/212/600/400",
    category: 'Classiche'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Marco Rossi",
    rating: 5,
    comment: "La miglior pizza che abbia mai mangiato fuori da Napoli! Impasto leggerissimo.",
    date: "12 Ottobre 2023",
    avatar: "https://i.pravatar.cc/150?u=marco"
  },
  {
    id: 2,
    author: "Elena Bianchi",
    rating: 4,
    comment: "Locale accogliente e personale gentilissimo. La Split Special è incredibile!",
    date: "05 Novembre 2023",
    avatar: "https://i.pravatar.cc/150?u=elena"
  },
  {
    id: 3,
    author: "Giuseppe Verdi",
    rating: 5,
    comment: "Ingredienti di altissima qualità. Si sente la differenza DOP.",
    date: "20 Dicembre 2023",
    avatar: "https://i.pravatar.cc/150?u=giuseppe"
  }
];
