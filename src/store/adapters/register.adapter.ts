import { STRAPI_API_ROUTES } from '../../constants/api/apiRoutes';

interface RegisterPayload {
  username: string;
  password: string;
}

export const registerAdapter = async (payload: RegisterPayload) => {
  try {
    const response = await fetch(STRAPI_API_ROUTES.REGISTER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_STRAPI_BEARER_TOKEN}`,
      },
      body: JSON.stringify({data: payload}),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || 'Registration failed');
    }

    return data;
  } catch (error: any) {
    throw new Error(error.message || 'Error during registration');
  }
};
