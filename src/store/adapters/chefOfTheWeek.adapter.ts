import { API_ROUTES } from '../../constants/api/apiRoutes';

export const fetchChefOfTheWeekFromApi = async (): Promise<any> => {
  const response = await fetch(API_ROUTES.CHEF_OF_THE_WEEK);
  if (!response.ok) {
    throw new Error('Failed to fetch Chef of the Week');
  }
  return response.json();
};
