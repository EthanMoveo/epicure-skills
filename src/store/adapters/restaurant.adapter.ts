import { Restaurant } from '../../constants/interfaces/Restaurant';

export const fetchRestaurantsFromApi = async (): Promise<Restaurant[]> => {
  const response = await fetch('http://localhost:3000/api/restaurants');
  if (!response.ok) {
    throw new Error('Failed to fetch restaurants');
  }

  const data: Restaurant[] = await response.json();
  return data;
};
