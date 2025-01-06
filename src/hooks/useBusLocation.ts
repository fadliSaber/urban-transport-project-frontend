import { useState, useEffect } from 'react';
import { Location, Stop } from '../types/Geolocation';


async function fetchStops(routeNumber: string): Promise<Stop[]> {
  return [
    {
      id: "1",
      name: "The Corniche",
      location: {
        lat: 33.6022,
        lng: -7.6320
      },
      distance: "2.3 miles"
    },
    {
      id: "2",
      name: "Anfa Place Shopping Center",
      location: {
        lat: 33.5890,
        lng: -7.6522
      },
      distance: "3.5 miles"
    },
    {
      id: "3",
      name: "La Sqala",
      location: {
        lat: 33.5922,
        lng: -7.6111
      },
      distance: "0.7 miles"
    },
    {
      id: "4",
      name: "Villa des Arts",
      location: {
        lat: 33.5917,
        lng: -7.6264
      },
      distance: "1.4 miles"
    },
    {
      id: "5",
      name: "Casa Port",
      location: {
        lat: 33.5976,
        lng: -7.6193
      },
      distance: "1.5 miles"
    },
    {
      id: "6",
      name: "Quartier Habous",
      location: {
        lat: 33.5989,
        lng: -7.6041
      },
      distance: "2.0 miles"
    }
  ];
}


export function useBusLocation(busId: string, routeNumber: string) {
  const [location, setLocation] = useState<Location>({lat: 33.6083, lng: -7.6295});
  const [stops, setStops] = useState<Stop[]>([]);
  const [nextStop, setNextStop] = useState<Stop>({
    id: '',
    name: '',
    location: { lat: 0, lng: 0 },
    distance: '',
  });
  const [estimatedArrival, setEstimatedArrival] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusLocation = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));

        setLocation(prevLocation => {
          const newLat = prevLocation.lat + 0.0001;
          const newLng = prevLocation.lng + 0.0001;
          return { lat: newLat, lng: newLng };
        });
        setNextStop({
          id: 'stop-1',
          name: 'Central Station',
          location: { lat: 33.6083, lng: -7.6295 },
          distance: '0.5 km',
        });
        const routeStops: Stop[] = await fetchStops(routeNumber);
        setStops(routeStops);
        setEstimatedArrival('5 minutes');

      } catch (err) {
        setError('Failed to fetch bus location');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBusLocation();

    const interval = setInterval(fetchBusLocation, 10000);
    return () => clearInterval(interval);
  }, [busId]);

  return { location, nextStop, stops, estimatedArrival, isLoading, error };
}