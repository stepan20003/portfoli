import type { Product, Order, DashboardStats } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Leather Tote',
    category: 'Totes',
    price: 195,
    description: 'A timeless silhouette crafted from premium Italian leather. Spacious enough for your laptop and daily essentials, featuring reinforced handles and a minimalist design.',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800'
    ],
    reviews: [
      { id: 'r1', author: 'Sarah J.', rating: 5, date: '2024-03-15', comment: 'Absolutely love the quality. It feels so premium and looks even better in person!' },
      { id: 'r2', author: 'Michael R.', rating: 4, date: '2024-02-28', comment: 'Perfect size for my laptop and essentials. Only wish it had one more inner pocket.' }
    ]
  },
  {
    id: '2',
    name: 'Urban Explorer Backpack',
    category: 'Backpacks',
    price: 145,
    description: 'Modern, functional, and weather-resistant. This backpack is designed for the city dweller who needs versatility without compromising on style.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=800'
    ],
    reviews: [
      { id: 'r3', author: 'Emily D.', rating: 5, date: '2024-03-10', comment: 'Great for commuting. The water-resistant material really works!' }
    ]
  },
  {
    id: '3',
    name: 'Minimalist Crossbody',
    category: 'Crossbody',
    price: 85,
    description: 'Keep it light with our sleek crossbody bag. Perfect for evenings out or weekends when you only need the essentials.',
    image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&q=80&w=800'
    ],
    reviews: []
  },
  {
    id: '4',
    name: 'Weekend Voyager Duffel',
    category: 'Travel Bags',
    price: 245,
    description: 'The ultimate travel companion. Durable canvas with leather accents, designed to fit in overhead compartments while holding everything you need for a 3-day getaway.',
    image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?auto=format&fit=crop&q=80&w=800'
    ],
    reviews: [
      { id: 'r4', author: 'James W.', rating: 5, date: '2024-01-20', comment: 'Sturdy and fits so much more than it looks. Worth every penny.' }
    ]
  },
  {
    id: '5',
    name: 'Signature Laptop Sleeve',
    category: 'Accessories',
    price: 65,
    description: 'Protect your tech with our padded, pebble-grain leather sleeve. Slim profile with a soft microfiber lining.',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800', // Re-using for demo
    images: ['https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800'],
    reviews: []
  }
];

export const mockOrders: Order[] = [
  { id: 'ORD-8291', customer: { name: 'Sarah Johnson', email: 'sarah.j@example.com' }, date: '2024-03-24', total: 340, status: 'shipped' },
  { id: 'ORD-7712', customer: { name: 'Michael Chen', email: 'm.chen@example.com' }, date: '2024-03-23', total: 145, status: 'pending' },
  { id: 'ORD-6543', customer: { name: 'Emma Davis', email: 'emma.d@example.com' }, date: '2024-03-22', total: 85, status: 'delivered' }
];

export const mockStats: DashboardStats = {
  totalRevenue: 128450,
  totalOrders: 842,
  totalProducts: 42,
  activeUsers: 1250
};
