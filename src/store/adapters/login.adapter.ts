import { STRAPI_API_ROUTES } from '../../constants/api/apiRoutes';

interface LoginPayload {
  username: string;
  password: string;
}

export const loginAdapter = async (payload: LoginPayload) => {
  try {
    const response = await fetch(STRAPI_API_ROUTES.LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_STRAPI_BEARER_TOKEN}`,
      },
      body: JSON.stringify(payload), 
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || 'Login failed');
    }

    return data;
  } catch (error: any) {
    throw new Error(error.message || 'Error during login');
  }
};
