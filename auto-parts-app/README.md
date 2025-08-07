# AutoParts Pro - Auto Parts E-Commerce App

A modern, responsive auto parts e-commerce application built with React, TypeScript, and Tailwind CSS.

## Features

### 🚗 Vehicle Compatibility
- Select your vehicle (make, model, year, engine)
- Filter parts by vehicle compatibility
- Only show parts that fit your specific vehicle

### 🔍 Advanced Search & Filtering
- Search by part name, part number, brand, or description
- Filter by category (Brakes, Engine, Lighting, Suspension, etc.)
- Filter by brand
- Price range filtering
- In-stock only filter
- Clear all filters functionality

### 🛒 Shopping Cart
- Add parts to cart with quantity management
- Remove individual items or clear entire cart
- Real-time cart total calculation
- Responsive cart sidebar

### 🎨 Modern UI/UX
- Fully responsive design (mobile, tablet, desktop)
- Beautiful product cards with images and ratings
- Intuitive navigation and filtering
- Professional automotive theme
- Loading states and error handling

### 📱 Product Catalog
- Product images with fallback placeholders
- Star ratings and review counts
- Stock availability indicators
- Detailed product specifications
- Part compatibility information
- Price display with currency formatting

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS for responsive design
- **Icons**: Lucide React for consistent iconography
- **Build Tool**: Create React App
- **Type Safety**: Full TypeScript implementation

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd auto-parts-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header with search and cart
│   ├── SearchFilters.tsx # Search and filter controls
│   ├── VehicleSelector.tsx # Vehicle selection component
│   ├── ProductCard.tsx # Individual product display
│   └── Cart.tsx        # Shopping cart sidebar
├── types/              # TypeScript type definitions
│   └── index.ts        # Core interfaces and types
├── data/               # Mock data and constants
│   └── mockData.ts     # Sample auto parts data
├── App.tsx             # Main application component
├── index.tsx           # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## Key Components

### Header
- Responsive navigation with mobile hamburger menu
- Search bar (desktop and mobile versions)
- Shopping cart icon with item count
- User account access

### Vehicle Selector
- Dropdown selection for make, model, and year
- Optional engine specification
- Compatibility filtering integration

### Search & Filters
- Text search across multiple fields
- Category and brand dropdowns
- Price range inputs
- Stock availability toggle
- Clear filters functionality

### Product Card
- Product image with error fallback
- Brand and category badges
- Star rating display
- Stock status indicators
- Add to cart functionality
- View details option

### Shopping Cart
- Slide-out cart sidebar
- Quantity adjustment controls
- Item removal options
- Cart total calculation
- Checkout button (placeholder)

## Data Model

### AutoPart Interface
```typescript
interface AutoPart {
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
```

## Future Enhancements

- User authentication and accounts
- Product reviews and ratings system
- Wishlist functionality
- Order history and tracking
- Payment integration
- Real-time inventory updates
- Advanced search with filters
- Product comparison feature
- Installation guides and tutorials
- Mobile app version

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please contact the development team.
