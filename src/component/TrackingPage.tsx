import React, { useState } from 'react';
import { BusSelector } from './BusSelector';
import { BusTracker } from './BusTracker';

// mock data - replace with API call
const ACTIVE_BUSES = [
  { id: 'bus-1', routeNumber: '101', currentStop: 'Central Station' },
  { id: 'bus-2', routeNumber: '202', currentStop: 'Business District' },
  { id: 'bus-3', routeNumber: '303', currentStop: 'University Campus' },
];

export function TrackingPage() {
  const [selectedBusId, setSelectedBusId] = useState<string | undefined>();

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Live Bus Tracking</h1>
          <p className="mt-2 text-gray-600">Select a bus to view its real-time location and status</p>
        </div>

        <BusSelector
          buses={ACTIVE_BUSES}
          onSelect={setSelectedBusId}
          selectedBusId={selectedBusId}
        />

        {selectedBusId && (
          <BusTracker
            busId={selectedBusId}
            routeNumber={ACTIVE_BUSES.find(bus => bus.id === selectedBusId)?.routeNumber || ''}
          />
        )}
      </div>
    </div>
  );
}