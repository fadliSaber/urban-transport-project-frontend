import { useState, useEffect } from 'react';
import { Stop } from '../types/Schedule';

// mock data for demonstration
const MOCK_STOPS: Stop[] = [
  { id: '1', name: 'Central Station' },
  { id: '2', name: 'Business District' },
  { id: '3', name: 'Harbor View' },
  { id: '4', name: 'Tech Hub' },
  { id: '5', name: 'Main Campus' },
  { id: '6', name: 'Student Housing' },
  { id: '7', name: 'Research Park' },
  { id: '8', name: 'Library Square' },
];

export function useStops() {
  const [stops, setStops] = useState<Stop[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // simulate API call
    const fetchStops = async () => {
      try {
        // replace with actual API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setStops(MOCK_STOPS);
      } catch (err) {
        setError('Failed to fetch stops');
      } finally {
        setIsLoading(false);
      }
    };

    fetchStops();
  }, []);

  return { stops, isLoading, error };
}