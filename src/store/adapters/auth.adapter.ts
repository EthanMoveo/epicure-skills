import { API_ROUTES } from '../../constants/api/apiRoutes';

export const loginUserApi = async (username: string, password: string): Promise<{ token: string, user: string }> => {
  const response = await fetch(API_ROUTES.LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message || 'Failed to log in due to an internal server error');
  }

  return response.json();
};

export const registerUserApi = async (username: string, password: string): Promise<{ message: string }> => {
  const response = await fetch(API_ROUTES.REGISTER, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message || 'Failed to register due to an internal server error');
  }

  return response.json();
};
