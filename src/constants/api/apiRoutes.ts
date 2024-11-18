
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const API_ROUTES = {
  RESTAURANTS: `${BASE_URL}/api/restaurants/`,
  DISHES: `${BASE_URL}/api/dishes/`,
  CHEF_OF_THE_WEEK: `${BASE_URL}/api/chefs/chef-of-the-week/`,
  LOGIN: `${BASE_URL}/api/auth/login`,
  REGISTER: `${BASE_URL}/api/auth/register`,
};
