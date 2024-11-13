import { Dish } from '../../constants/interfaces/Dish';
import { API_ROUTES } from '../../constants/api/apiRoutes';

export const fetchDishesFromApi = async (): Promise<Dish[]> => {
  const response = await fetch(API_ROUTES.DISHES);
  if (!response.ok) {
    throw new Error('Failed to fetch dishes');
  }
  const data: Dish[] = await response.json();
  return data;
};
