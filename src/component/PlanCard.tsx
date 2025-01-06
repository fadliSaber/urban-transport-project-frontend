import React from 'react';
import { Check } from 'lucide-react';

type PlanFeature = {
  text: string;
  included: boolean;
};

type PlanCardProps = {
  name: string;
  price: number;
  duration: string;
  features: PlanFeature[];
  recommended?: boolean;
  onSelect: () => void;
};

export function PlanCard({ name, price, duration, features, recommended, onSelect }: PlanCardProps) {
  return (
    <div className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${recommended ? 'ring-2 ring-blue-600' : ''}`}>
      {recommended && (
        <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
          Recommended
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-4xl font-bold text-gray-900">${price}</span>
          <span className="text-gray-600 ml-2">/{duration}</span>
        </div>
        
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className={`h-5 w-5 mr-2 ${feature.included ? 'text-blue-600' : 'text-gray-400'}`} />
              <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
        
        <button
          onClick={onSelect}
          className={`w-full py-3 px-4 rounded-lg font-semibold ${
            recommended
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          Select Plan
        </button>
      </div>
    </div>
  );
}