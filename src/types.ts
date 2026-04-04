export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  images: string[];
  reviews: Review[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  customer: {
    name: string;
    email: string;
  };
  date: string;
  total: number;
  status: 'pending' | 'shipped' | 'delivered';
}

export interface DashboardStats {
  totalRevenue: number;
  totalOrders: number;
  totalProducts: number;
  activeUsers: number;
}
