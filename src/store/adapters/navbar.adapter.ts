import { STRAPI_API_ROUTES } from '../../constants/api/apiRoutes';

export const fetchNavbarAdapter = async () => {
  try {
    const response = await fetch(STRAPI_API_ROUTES.NAVBAR, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_STRAPI_BEARER_TOKEN}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to fetch navbar items');
    }

    return data;
  } catch (error: any) {
    throw new Error(error.message || 'Error during navbar fetch');
  }
};
