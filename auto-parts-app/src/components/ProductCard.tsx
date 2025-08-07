import React from 'react';
import { Star, ShoppingCart, Eye, Package } from 'lucide-react';
import { AutoPart } from '../types';

interface ProductCardProps {
  part: AutoPart;
  onAddToCart: (part: AutoPart) => void;
  onViewDetails: (part: AutoPart) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ part, onAddToCart, onViewDetails }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="h-4 w-4 fill-yellow-400 text-yellow-400 opacity-50" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative h-48 bg-gray-200">
        <img
          src={part.image}
          alt={part.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://via.placeholder.com/400x300/f3f4f6/6b7280?text=${encodeURIComponent(part.name)}`;
          }}
        />
        {!part.inStock && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
            Out of Stock
          </div>
        )}
        {part.inStock && part.stockQuantity < 10 && (
          <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded text-sm font-medium">
            Low Stock
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Brand and Category */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-primary-600">{part.brand}</span>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{part.category}</span>
        </div>

        {/* Name */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{part.name}</h3>

        {/* Part Number */}
        <p className="text-sm text-gray-600 mb-2">Part #: {part.partNumber}</p>

        {/* Rating and Reviews */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {renderStars(part.rating)}
          </div>
          <span className="ml-2 text-sm text-gray-600">({part.reviews} reviews)</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-700 mb-4 line-clamp-2">{part.description}</p>

        {/* Stock Info */}
        <div className="flex items-center mb-4">
          <Package className="h-4 w-4 text-gray-400 mr-1" />
          <span className="text-sm text-gray-600">
            {part.inStock ? `${part.stockQuantity} in stock` : 'Out of stock'}
          </span>
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            ${part.price.toFixed(2)}
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => onViewDetails(part)}
              className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors"
              title="View Details"
            >
              <Eye className="h-5 w-5" />
            </button>
            <button
              onClick={() => onAddToCart(part)}
              disabled={!part.inStock}
              className={`flex items-center px-4 py-2 rounded-md font-medium transition-colors ${
                part.inStock
                  ? 'bg-primary-600 text-white hover:bg-primary-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;