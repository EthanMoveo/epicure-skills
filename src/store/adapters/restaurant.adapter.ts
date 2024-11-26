import { STRAPI_API_ROUTES } from '../../constants/api/apiRoutes';

export const fetchRestaurantSwiperAdapter = async () => {
  const response = await fetch(STRAPI_API_ROUTES.RESTAURANTS, {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_STRAPI_BEARER_TOKEN}`,
        'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
};
