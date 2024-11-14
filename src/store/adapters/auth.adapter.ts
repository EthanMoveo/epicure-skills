import { API_ROUTES } from '../../constants/api/apiRoutes';

export const loginUserApi = async (username: string, password: string): Promise<{ token: string }> => {
  const response = await fetch(API_ROUTES.LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  if (!response.ok) {
    throw new Error('Failed to log in');
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
    throw new Error('Failed to register');
  }
  return response.json();
};
