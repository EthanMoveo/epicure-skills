import { STRAPI_API_ROUTES } from '../../constants/api/apiRoutes';

export const fetchChefOfTheWeekAdapter = async () => {
  try {
    const chefResponse = await fetch(STRAPI_API_ROUTES.CHEF_OF_THE_WEEK, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_STRAPI_BEARER_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (!chefResponse.ok) {
      throw new Error(`Error fetching chef of the week: ${chefResponse.status}`);
    }

    const chefData = await chefResponse.json();

    const chefId = chefData.data?.chef?.id;
    if (!chefId) {
      throw new Error('Chef ID not found in response');
    }

    const restaurantsResponse = await fetch(`${STRAPI_API_ROUTES.RESTAURANTS_CHEF_OF_THE_WEEK}/${chefId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_STRAPI_BEARER_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (!restaurantsResponse.ok) {
      throw new Error(`Error fetching restaurants by chef: ${restaurantsResponse.status}`);
    }

    const restaurantsData = await restaurantsResponse.json();

    return {
      chef: chefData,
      restaurants: restaurantsData
    };
  } catch (error) {
    throw new Error((error as Error).message || 'Error fetching chef of the week and their restaurants');
  }
};
