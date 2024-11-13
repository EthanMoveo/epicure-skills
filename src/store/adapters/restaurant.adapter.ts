import { API_ROUTES } from '../../constants/api/apiRoutes';
import { Restaurant } from '../../constants/interfaces/Restaurant';

export const fetchRestaurantsFromApi = async (): Promise<Restaurant[]> => {
  console.log("Fetching from URL:", API_ROUTES.RESTAURANTS);
  const response = await fetch(API_ROUTES.RESTAURANTS);
  if (!response.ok) {
    throw new Error('Failed to fetch restaurants');
  }

  const data: Restaurant[] = await response.json();
  return data;
};
