import { STRAPI_API_ROUTES } from '../../constants/api/apiRoutes';

export const fetchHeroAdapter = async () => {
  try {
    const response = await fetch(STRAPI_API_ROUTES.HERO, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_STRAPI_BEARER_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching hero data: ${response.status}`);
    }

    const data = await response.json();

    return data
  } catch (error: any) {
    throw new Error(error.message || 'Error fetching hero data');
  }
};
