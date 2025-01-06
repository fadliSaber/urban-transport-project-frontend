import React from 'react';
import { Bus } from 'lucide-react';
import { ActiveBus } from '../types/Geolocation';

type BusSelectorProps = {
  buses: ActiveBus[];
  onSelect: (busId: string) => void;
  selectedBusId?: string;
};

export function BusSelector({ buses, onSelect, selectedBusId }: BusSelectorProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {buses.map((bus) => (
        <button
          key={bus.id}
          onClick={() => onSelect(bus.id)}
          className={`p-4 rounded-lg border transition-all ${
            selectedBusId === bus.id
              ? 'border-blue-600 bg-blue-50'
              : 'border-gray-200 hover:border-blue-400'
          }`}
        >
          <div className="flex items-center space-x-3">
            <Bus className={`h-6 w-6 ${selectedBusId === bus.id ? 'text-blue-600' : 'text-gray-400'}`} />
            <div className="text-left">
              <div className="font-medium">Bus {bus.routeNumber}</div>
              <div className="text-sm text-gray-500">{bus.currentStop}</div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}