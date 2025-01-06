import React from 'react';
import { Navigation } from 'lucide-react';
import { LoadingSpinner } from './LoadSpinner';
import { BusInfo } from './BusInfo';
import { Map } from './Map';
import { useBusLocation } from '../hooks/useBusLocation';

type BusTrackerProps = {
  busId: string;
  routeNumber: string;
};

export function BusTracker({ busId, routeNumber }: BusTrackerProps) {
  const { location, nextStop, stops, estimatedArrival, isLoading, error } = useBusLocation(busId, routeNumber);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div className="text-red-600">Error loading bus location: {error}</div>;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold flex items-center">
          <Navigation className="h-5 w-5 mr-2 text-blue-600" />
          Bus {routeNumber} Live Location
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <Map currentLocation={location} nextStop={nextStop} stops={stops}/>
        
        <BusInfo
          routeNumber={routeNumber}
          currentLocation={location}
          nextStop={nextStop}
          estimatedArrival={estimatedArrival}
        />
      </div>
    </div>
  );
}