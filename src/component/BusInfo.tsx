import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import { Location, Stop } from '../types/Geolocation';

type BusInfoProps = {
  routeNumber: string;
  currentLocation: Location;
  nextStop: Stop;
  estimatedArrival: string;
};

export function BusInfo({
  routeNumber,
  currentLocation,
  nextStop,
  estimatedArrival,
}: BusInfoProps) {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-2">Current Status</h3>
        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <MapPin className="h-5 w-5 mr-2" />
            <span>Next Stop: {nextStop.name}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="h-5 w-5 mr-2" />
            <span>Estimated Arrival: {estimatedArrival}</span>
          </div>
        </div>
      </div>

      <div className="border-t pt-4">
        <h3 className="text-lg font-medium mb-2">Live Updates</h3>
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-sm text-blue-700">
            Bus {routeNumber} is currently {nextStop.distance} away from {nextStop.name}
          </p>
        </div>
      </div>
    </div>
  );
}