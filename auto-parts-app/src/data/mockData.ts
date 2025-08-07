import { AutoPart } from '../types';

export const mockAutoParts: AutoPart[] = [
  {
    id: '1',
    name: 'Brake Pads - Front Set',
    partNumber: 'BP-001-FRT',
    brand: 'Brembo',
    category: 'Brakes',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    description: 'High-performance ceramic brake pads for superior stopping power and reduced brake dust.',
    inStock: true,
    stockQuantity: 25,
    compatibility: [
      { make: 'Honda', model: 'Civic', year: 2018 },
      { make: 'Honda', model: 'Civic', year: 2019 },
      { make: 'Honda', model: 'Civic', year: 2020 },
    ],
    specifications: {
      'Material': 'Ceramic',
      'Thickness': '12mm',
      'Width': '150mm',
      'Height': '65mm'
    },
    rating: 4.5,
    reviews: 128
  },
  {
    id: '2',
    name: 'Engine Oil Filter',
    partNumber: 'OF-002-STD',
    brand: 'Mann-Filter',
    category: 'Engine',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1486328228599-85db4895732b?w=400&h=300&fit=crop',
    description: 'Premium oil filter with advanced filtration technology for optimal engine protection.',
    inStock: true,
    stockQuantity: 150,
    compatibility: [
      { make: 'Toyota', model: 'Camry', year: 2017 },
      { make: 'Toyota', model: 'Camry', year: 2018 },
      { make: 'Toyota', model: 'Corolla', year: 2019 },
    ],
    specifications: {
      'Thread Size': '3/4-16 UNF',
      'Height': '95mm',
      'Diameter': '76mm',
      'Gasket': 'Included'
    },
    rating: 4.3,
    reviews: 89
  },
  {
    id: '3',
    name: 'LED Headlight Bulbs - H11',
    partNumber: 'LED-H11-6K',
    brand: 'Philips',
    category: 'Lighting',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
    description: 'Ultra-bright LED headlight bulbs with 6000K color temperature for enhanced visibility.',
    inStock: true,
    stockQuantity: 75,
    compatibility: [
      { make: 'Ford', model: 'F-150', year: 2015 },
      { make: 'Ford', model: 'F-150', year: 2016 },
      { make: 'Ford', model: 'Mustang', year: 2018 },
    ],
    specifications: {
      'Bulb Type': 'H11',
      'Wattage': '25W',
      'Lumens': '3200lm',
      'Color Temperature': '6000K'
    },
    rating: 4.7,
    reviews: 203
  },
  {
    id: '4',
    name: 'Air Filter',
    partNumber: 'AF-004-STD',
    brand: 'K&N',
    category: 'Engine',
    price: 28.99,
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop',
    description: 'High-flow air filter for improved engine performance and fuel efficiency.',
    inStock: false,
    stockQuantity: 0,
    compatibility: [
      { make: 'Chevrolet', model: 'Silverado', year: 2019 },
      { make: 'Chevrolet', model: 'Silverado', year: 2020 },
      { make: 'GMC', model: 'Sierra', year: 2019 },
    ],
    specifications: {
      'Length': '350mm',
      'Width': '235mm',
      'Height': '25mm',
      'Material': 'Cotton Gauze'
    },
    rating: 4.4,
    reviews: 156
  },
  {
    id: '5',
    name: 'Spark Plugs - Set of 4',
    partNumber: 'SP-005-PLT',
    brand: 'NGK',
    category: 'Engine',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
    description: 'Platinum spark plugs for reliable ignition and improved fuel economy.',
    inStock: true,
    stockQuantity: 60,
    compatibility: [
      { make: 'Honda', model: 'Accord', year: 2016 },
      { make: 'Honda', model: 'Accord', year: 2017 },
      { make: 'Acura', model: 'TLX', year: 2018 },
    ],
    specifications: {
      'Gap': '0.044"',
      'Thread Size': '14mm',
      'Reach': '19mm',
      'Heat Range': '6'
    },
    rating: 4.6,
    reviews: 94
  },
  {
    id: '6',
    name: 'Shock Absorbers - Rear Pair',
    partNumber: 'SA-006-RR',
    brand: 'Monroe',
    category: 'Suspension',
    price: 124.99,
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=300&fit=crop',
    description: 'Premium gas-charged shock absorbers for smooth ride and improved handling.',
    inStock: true,
    stockQuantity: 18,
    compatibility: [
      { make: 'BMW', model: '3 Series', year: 2015 },
      { make: 'BMW', model: '3 Series', year: 2016 },
      { make: 'BMW', model: '3 Series', year: 2017 },
    ],
    specifications: {
      'Length': '520mm',
      'Compressed Length': '320mm',
      'Piston Diameter': '35mm',
      'Mounting': 'Top: Stud, Bottom: Eye'
    },
    rating: 4.2,
    reviews: 67
  }
];

export const categories = [
  'All Categories',
  'Brakes',
  'Engine',
  'Lighting',
  'Suspension',
  'Electrical',
  'Exhaust',
  'Transmission'
];

export const brands = [
  'All Brands',
  'Brembo',
  'Mann-Filter',
  'Philips',
  'K&N',
  'NGK',
  'Monroe',
  'Bosch',
  'Denso'
];

export const vehicleMakes = ['Honda', 'Toyota', 'Ford', 'Chevrolet', 'BMW', 'Mercedes', 'Audi', 'Volkswagen'];