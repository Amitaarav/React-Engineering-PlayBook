import React, { useState } from 'react';

// ===== INTERFACES =====
export interface PriceOption {
  type: string;
  price: number;
  label: string;
}

export interface Service {
  id: number;
  name: string;
  type: string;
  basePrice: number;
  count: number;
}

interface PriceToggleProps {
  service?: Service;
  onPriceSelect?: (serviceId: number, option: PriceOption) => void;
}

// ===== SOLUTION 1: Dropdown Selector with Preview =====
export const DropdownSelector: React.FC = () => {
  const [selectedPrice, setSelectedPrice] = useState<PriceOption | null>(null);
  
  const priceOptions: PriceOption[] = [
    { type: 'hourly', price: 41, label: 'Hourly' },
    { type: 'monthly', price: 120, label: 'Monthly' },
    { type: 'quarterly', price: 320, label: 'Quarterly' },
    { type: 'yearly', price: 1100, label: 'Yearly' }
  ];

  const handleSelect = (option: PriceOption) => {
    setSelectedPrice(option);
    console.log('Selected:', option);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Dropdown Selector Demo</h2>
      <p className="text-gray-600 mb-4">Service: TEST bhargav</p>
      
      <div className="border rounded-lg p-4 bg-gray-50">
        {!selectedPrice ? (
          // PRE-SELECTION: Show all options
          <div>
            <h3 className="font-semibold mb-3">Select Pricing Option:</h3>
            <div className="grid grid-cols-2 gap-3">
              {priceOptions.map(option => (
                <button
                  key={option.type}
                  className="p-3 border border-gray-300 rounded-lg bg-white hover:bg-blue-50 hover:border-blue-300 transition-colors text-left"
                  onClick={() => handleSelect(option)}
                >
                  <div className="font-medium text-gray-900">{option.label}</div>
                  <div className="text-green-600 font-semibold">${option.price}</div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          // POST-SELECTION: Show selected only
          <div className="text-center">
            <h3 className="font-semibold mb-2">Selected Plan:</h3>
            <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 inline-block">
              <div className="text-xl font-bold text-blue-800">{selectedPrice.label}</div>
              <div className="text-2xl font-bold text-green-600">${selectedPrice.price}</div>
            </div>
            <button 
              className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              onClick={() => setSelectedPrice(null)}
            >
              Change Selection
            </button>
          </div>
        )}
      </div>
      
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h4 className="font-semibold text-yellow-800 mb-2">How this works:</h4>
        <ul className="text-sm text-yellow-700 list-disc pl-4">
          <li>All options visible initially in a grid</li>
          <li>Click any option to select it</li>
          <li>Grid collapses, shows only selected option</li>
          <li>Click "Change Selection" to see all options again</li>
        </ul>
      </div>
    </div>
  );
};

// ===== SOLUTION 2: Compact Toggle Switch =====
export const PriceToggle: React.FC<PriceToggleProps> = ({ 
  service = { id: 1, name: 'TEST bhargav', type: 'hourly', basePrice: 41, count: 0 },
  onPriceSelect = (id, option) => console.log('Selected:', option)
}) => {
  const [selectedType, setSelectedType] = useState('hourly');
  
  const priceOptions = {
    hourly: { price: 41, label: 'H' },
    monthly: { price: 120, label: 'M' },
    quarterly: { price: 320, label: 'Q' },
    yearly: { price: 1100, label: 'Y' }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-green-600">Price Toggle Demo</h2>
      <p className="text-gray-600 mb-4">Service: {service.name}</p>
      
      <div className="border rounded-lg p-4 bg-gray-50">
        <div className="flex items-center justify-between">
          <div className="flex border border-gray-300 rounded-lg overflow-hidden bg-white">
            {Object.entries(priceOptions).map(([type, data]) => (
              <button
                key={type}
                className={`
                  px-4 py-3 text-sm font-medium transition-colors border-r border-gray-300 last:border-r-0
                  min-w-[50px] flex items-center justify-center
                  ${selectedType === type 
                    ? 'bg-green-500 text-white border-green-600' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }
                `}
                onClick={() => {
                  setSelectedType(type);
                  onPriceSelect(service.id, { type, ...data });
                }}
                title={`${type.charAt(0).toUpperCase() + type.slice(1)}: $${data.price}`}
              >
                {data.label}
              </button>
            ))}
          </div>
          
          <div className="text-right">
            <div className="text-sm text-gray-600">Selected Price:</div>
            <div className="text-2xl font-bold text-green-600">
              ${priceOptions[selectedType as keyof typeof priceOptions].price}
            </div>
          </div>
        </div>
        
        <div className="mt-4 text-center text-sm text-gray-500">
          Hover over buttons to see full details
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
        <h4 className="font-semibold text-green-800 mb-2">How this works:</h4>
        <ul className="text-sm text-green-700 list-disc pl-4">
          <li>All options (H/M/Q/Y) always visible as compact buttons</li>
          <li>Single click to select any option</li>
          <li>Active option highlighted in green</li>
          <li>Hover for tooltips with full price details</li>
          <li>Most compact solution for tables</li>
        </ul>
      </div>
    </div>
  );
};

// ===== SOLUTION 3: Hover Reveal =====
export const HoverReveal: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [selectedOption, setSelectedOption] = useState<PriceOption>({
    type: 'hourly',
    price: 41,
    label: 'Hourly'
  });

  const priceOptions: PriceOption[] = [
    { type: 'hourly', price: 41, label: 'Hourly' },
    { type: 'monthly', price: 120, label: 'Monthly' },
    { type: 'quarterly', price: 320, label: 'Quarterly' },
    { type: 'yearly', price: 1100, label: 'Yearly' }
  ];

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-purple-600">Hover Reveal Demo</h2>
      <p className="text-gray-600 mb-4">Service: TEST bhargav</p>
      
      <div className="border rounded-lg p-4 bg-gray-50">
        <div 
          className="relative bg-white border border-gray-300 rounded-lg cursor-pointer"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="p-4 flex justify-between items-center">
            <div>
              <div className="font-medium text-gray-900">{selectedOption.label}</div>
              <div className="text-green-600 font-semibold text-xl">${selectedOption.price}</div>
            </div>
            <div className="text-gray-400 transform transition-transform">
              {isHovering ? '▲' : '▼'}
            </div>
          </div>
          
          {isHovering && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg z-10 mt-1">
              {priceOptions.map(option => (
                <div
                  key={option.type}
                  className={`p-3 hover:bg-purple-50 cursor-pointer border-b border-gray-200 last:border-b-0 ${
                    selectedOption.type === option.type ? 'bg-purple-100' : ''
                  }`}
                  onClick={() => {
                    setSelectedOption(option);
                    setIsHovering(false);
                    console.log('Selected:', option);
                  }}
                >
                  <div className="font-medium text-gray-900">{option.label}</div>
                  <div className="text-green-600 font-semibold">${option.price}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="mt-4 text-center text-sm text-gray-500">
          Hover over the box to see all options
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
        <h4 className="font-semibold text-purple-800 mb-2">How this works:</h4>
        <ul className="text-sm text-purple-700 list-disc pl-4">
          <li>Shows only selected option by default</li>
          <li>Hover to reveal dropdown with all options</li>
          <li>Click any option in dropdown to select</li>
          <li>Dropdown closes after selection</li>
          <li>Traditional dropdown pattern</li>
        </ul>
      </div>
    </div>
  );
};