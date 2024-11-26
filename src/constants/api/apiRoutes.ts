
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const STRAPI_API_URL = import.meta.env.VITE_STRAPI_API_BASE_URL

export const API_ROUTES = {
  RESTAURANTS: `${BASE_URL}/api/restaurants/`,
  DISHES: `${BASE_URL}/api/dishes/`,
  CHEF_OF_THE_WEEK: `${BASE_URL}/api/chefs/chef-of-the-week/`,
  LOGIN: `${BASE_URL}/api/auth/login`,
  REGISTER: `${BASE_URL}/api/auth/register`,
};


export const STRAPI_API_ROUTES = {
  DISHES: `${STRAPI_API_URL}/api/dish-swiper?populate%3D=*&populate[dishes][populate][0]=image&populate[dishes][populate][1]=tags.image`,
  RESTAURANTS: `${STRAPI_API_URL}/api/restaurant-swiper?populate[0]=restaurants&populate[restaurants][populate][0]=image&populate[restaurants][populate][1]=chef`,
  CHEF_OF_THE_WEEK: `${STRAPI_API_URL}/api/chef-of-the-week?populate[0]=chef&populate[chef][populate][0]=image`,
  RESTAURANTS_CHEF_OF_THE_WEEK: `${STRAPI_API_URL}/api/restaurants/by-chef`
}


