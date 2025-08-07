import React, { useState } from 'react';
import { Car, Check, X } from 'lucide-react';
import { Vehicle } from '../types';
import { vehicleMakes } from '../data/mockData';

interface VehicleSelectorProps {
  selectedVehicle: Vehicle | null;
  onVehicleSelect: (vehicle: Vehicle | null) => void;
}

const VehicleSelector: React.FC<VehicleSelectorProps> = ({
  selectedVehicle,
  onVehicleSelect,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [tempVehicle, setTempVehicle] = useState<Partial<Vehicle>>({
    make: '',
    model: '',
    year: new Date().getFullYear(),
  });

  // Mock data for models based on make
  const getModelsForMake = (make: string): string[] => {
    const models: { [key: string]: string[] } = {
      'Honda': ['Civic', 'Accord', 'CR-V', 'Pilot', 'Fit'],
      'Toyota': ['Camry', 'Corolla', 'RAV4', 'Highlander', 'Prius'],
      'Ford': ['F-150', 'Mustang', 'Explorer', 'Escape', 'Focus'],
      'Chevrolet': ['Silverado', 'Camaro', 'Equinox', 'Malibu', 'Cruze'],
      'BMW': ['3 Series', '5 Series', 'X3', 'X5', 'i3'],
      'Mercedes': ['C-Class', 'E-Class', 'GLC', 'GLE', 'A-Class'],
      'Audi': ['A4', 'A6', 'Q5', 'Q7', 'A3'],
      'Volkswagen': ['Jetta', 'Golf', 'Passat', 'Tiguan', 'Atlas'],
    };
    return models[make] || [];
  };

  const generateYears = (): number[] => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = currentYear; year >= 1990; year--) {
      years.push(year);
    }
    return years;
  };

  const handleApplyVehicle = () => {
    if (tempVehicle.make && tempVehicle.model && tempVehicle.year) {
      onVehicleSelect(tempVehicle as Vehicle);
      setIsExpanded(false);
    }
  };

  const handleClearVehicle = () => {
    onVehicleSelect(null);
    setTempVehicle({ make: '', model: '', year: new Date().getFullYear() });
    setIsExpanded(false);
  };

  const handleInputChange = (field: keyof Vehicle, value: string | number) => {
    setTempVehicle(prev => ({
      ...prev,
      [field]: value,
      // Reset model when make changes
      ...(field === 'make' ? { model: '' } : {}),
    }));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Car className="h-5 w-5 text-primary-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-900">My Vehicle</h3>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary-600 hover:text-primary-700 font-medium"
        >
          {selectedVehicle ? 'Change Vehicle' : 'Select Vehicle'}
        </button>
      </div>

      {selectedVehicle && !isExpanded && (
        <div className="mt-3 p-3 bg-primary-50 rounded-md">
          <p className="text-sm font-medium text-primary-900">
            {selectedVehicle.year} {selectedVehicle.make} {selectedVehicle.model}
            {selectedVehicle.engine && ` - ${selectedVehicle.engine}`}
          </p>
          <p className="text-xs text-primary-600 mt-1">
            Parts will be filtered to show compatible items only
          </p>
        </div>
      )}

      {isExpanded && (
        <div className="mt-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Make */}
            <div>
              <label htmlFor="make" className="block text-sm font-medium text-gray-700 mb-1">
                Make
              </label>
              <select
                id="make"
                value={tempVehicle.make || ''}
                onChange={(e) => handleInputChange('make', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select Make</option>
                {vehicleMakes.map((make) => (
                  <option key={make} value={make}>
                    {make}
                  </option>
                ))}
              </select>
            </div>

            {/* Model */}
            <div>
              <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
                Model
              </label>
              <select
                id="model"
                value={tempVehicle.model || ''}
                onChange={(e) => handleInputChange('model', e.target.value)}
                disabled={!tempVehicle.make}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
              >
                <option value="">Select Model</option>
                {tempVehicle.make && getModelsForMake(tempVehicle.make).map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </select>
            </div>

            {/* Year */}
            <div>
              <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                Year
              </label>
              <select
                id="year"
                value={tempVehicle.year || ''}
                onChange={(e) => handleInputChange('year', Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                {generateYears().map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Engine (Optional) */}
          <div>
            <label htmlFor="engine" className="block text-sm font-medium text-gray-700 mb-1">
              Engine (Optional)
            </label>
            <input
              type="text"
              id="engine"
              value={tempVehicle.engine || ''}
              onChange={(e) => handleInputChange('engine', e.target.value)}
              placeholder="e.g., 2.0L Turbo, V6 3.5L"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          {/* Actions */}
          <div className="flex space-x-3">
            <button
              onClick={handleApplyVehicle}
              disabled={!tempVehicle.make || !tempVehicle.model}
              className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-md font-medium hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              <Check className="h-4 w-4 mr-2" />
              Apply Vehicle
            </button>
            <button
              onClick={handleClearVehicle}
              className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition-colors"
            >
              <X className="h-4 w-4 mr-2" />
              Clear Vehicle
            </button>
            <button
              onClick={() => setIsExpanded(false)}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleSelector;