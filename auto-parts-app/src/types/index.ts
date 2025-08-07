export interface AutoPart {
  id: string;
  name: string;
  partNumber: string;
  brand: string;
  category: string;
  price: number;
  image: string;
  description: string;
  inStock: boolean;
  stockQuantity: number;
  compatibility: VehicleCompatibility[];
  specifications: { [key: string]: string };
  rating: number;
  reviews: number;
}

export interface VehicleCompatibility {
  make: string;
  model: string;
  year: number;
  engine?: string;
}

export interface Vehicle {
  make: string;
  model: string;
  year: number;
  engine?: string;
}

export interface CartItem {
  part: AutoPart;
  quantity: number;
}

export interface FilterOptions {
  category?: string;
  brand?: string;
  priceRange?: [number, number];
  inStock?: boolean;
  vehicle?: Vehicle;
}

export interface SearchFilters {
  query: string;
  category: string;
  brand: string;
  priceMin: number;
  priceMax: number;
  inStock: boolean;
}