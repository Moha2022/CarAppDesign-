import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import SearchFiltersComponent from './components/SearchFilters';
import VehicleSelector from './components/VehicleSelector';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import { AutoPart, CartItem, SearchFilters, Vehicle } from './types';
import { mockAutoParts } from './data/mockData';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    category: 'All Categories',
    brand: 'All Brands',
    priceMin: 0,
    priceMax: 1000,
    inStock: false,
  });

  // Filter products based on search criteria and vehicle compatibility
  const filteredProducts = useMemo(() => {
    return mockAutoParts.filter((part) => {
      // Text search
      if (filters.query) {
        const searchTerms = filters.query.toLowerCase();
        const searchableText = `${part.name} ${part.partNumber} ${part.brand} ${part.description}`.toLowerCase();
        if (!searchableText.includes(searchTerms)) {
          return false;
        }
      }

      // Category filter
      if (filters.category !== 'All Categories' && part.category !== filters.category) {
        return false;
      }

      // Brand filter
      if (filters.brand !== 'All Brands' && part.brand !== filters.brand) {
        return false;
      }

      // Price range filter
      if (part.price < filters.priceMin || part.price > filters.priceMax) {
        return false;
      }

      // In stock filter
      if (filters.inStock && !part.inStock) {
        return false;
      }

      // Vehicle compatibility filter
      if (selectedVehicle) {
        const isCompatible = part.compatibility.some(compat => 
          compat.make === selectedVehicle.make &&
          compat.model === selectedVehicle.model &&
          compat.year === selectedVehicle.year
        );
        if (!isCompatible) {
          return false;
        }
      }

      return true;
    });
  }, [filters, selectedVehicle]);

  const handleAddToCart = (part: AutoPart) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.part.id === part.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.part.id === part.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { part, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (partId: string, quantity: number) => {
    if (quantity === 0) {
      handleRemoveFromCart(partId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.part.id === partId
            ? { ...item, quantity }
            : item
        )
      );
    }
  };

  const handleRemoveFromCart = (partId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.part.id !== partId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleClearFilters = () => {
    setFilters({
      query: '',
      category: 'All Categories',
      brand: 'All Brands',
      priceMin: 0,
      priceMax: 1000,
      inStock: false,
    });
  };

  const handleViewDetails = (part: AutoPart) => {
    // For now, just show an alert with part details
    // In a real app, this would open a detailed product page or modal
    alert(`Part Details:\n\nName: ${part.name}\nPart #: ${part.partNumber}\nBrand: ${part.brand}\nPrice: $${part.price}\n\nDescription: ${part.description}`);
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        cartItemCount={cartItemCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Vehicle Selector */}
        <VehicleSelector
          selectedVehicle={selectedVehicle}
          onVehicleSelect={setSelectedVehicle}
        />

        {/* Search and Filters */}
        <SearchFiltersComponent
          filters={filters}
          onFiltersChange={setFilters}
          onClearFilters={handleClearFilters}
        />

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {mockAutoParts.length} products
            {selectedVehicle && (
              <span className="ml-2 text-primary-600 font-medium">
                • Compatible with {selectedVehicle.year} {selectedVehicle.make} {selectedVehicle.model}
              </span>
            )}
          </p>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((part) => (
              <ProductCard
                key={part.id}
                part={part}
                onAddToCart={handleAddToCart}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="text-gray-400 mb-4">
                <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.469.949-6 2.471M12 3v6.5" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No parts found</h3>
              <p className="text-gray-500 mb-4">
                Try adjusting your search criteria or filters to find more products.
              </p>
              <button
                onClick={handleClearFilters}
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Clear all filters
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Shopping Cart */}
      <Cart
        isOpen={isCartOpen}
        cartItems={cartItems}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />
    </div>
  );
}

export default App;
