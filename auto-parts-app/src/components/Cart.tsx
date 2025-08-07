import React from 'react';
import { X, Plus, Minus, ShoppingCart as CartIcon, Trash2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  cartItems: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (partId: string, quantity: number) => void;
  onRemoveItem: (partId: string) => void;
  onClearCart: () => void;
}

const Cart: React.FC<CartProps> = ({
  isOpen,
  cartItems,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.part.price * item.quantity, 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <CartIcon className="h-5 w-5 mr-2" />
                Shopping Cart ({totalItems})
              </h2>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <CartIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
                <p className="text-gray-500">Add some auto parts to get started!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.part.id} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                    <img
                      src={item.part.image}
                      alt={item.part.name}
                      className="h-16 w-16 object-cover rounded"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://via.placeholder.com/64x64/f3f4f6/6b7280?text=${encodeURIComponent(item.part.name.slice(0, 2))}`;
                      }}
                    />
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-2">
                        {item.part.name}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">Part #: {item.part.partNumber}</p>
                      <p className="text-sm font-medium text-gray-900 mt-1">
                        ${item.part.price.toFixed(2)}
                      </p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center mt-2 space-x-2">
                        <button
                          onClick={() => onUpdateQuantity(item.part.id, Math.max(0, item.quantity - 1))}
                          className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="text-sm font-medium px-2">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.part.id, item.quantity + 1)}
                          className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => onRemoveItem(item.part.id)}
                          className="p-1 text-red-400 hover:text-red-600 hover:bg-red-50 rounded ml-2"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">
                        ${(item.part.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 px-6 py-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-gray-900">Total:</span>
                <span className="text-xl font-bold text-gray-900">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              
              <div className="space-y-2">
                <button className="w-full bg-primary-600 text-white py-3 rounded-md font-medium hover:bg-primary-700 transition-colors">
                  Proceed to Checkout
                </button>
                <button
                  onClick={onClearCart}
                  className="w-full border border-gray-300 text-gray-700 py-2 rounded-md font-medium hover:bg-gray-50 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;