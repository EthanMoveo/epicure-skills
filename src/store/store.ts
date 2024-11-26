import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices/login.slice';
import registerReducer from './slices/register.slice';
import dishSwiperReducer from './slices/dish.slice';
import restaurantSwiperReducer from './slices/restaurant.slice';
import chefOfTheWeekReducer from './slices/chefOfTheWeek.slice';
import aboutUsReducer from './slices/aboutUs.slice';

export const store = configureStore({
  reducer: {
    restaurantSwiper: restaurantSwiperReducer,
    dishSwiper: dishSwiperReducer,
    chefWeek: chefOfTheWeekReducer,
    aboutUs: aboutUsReducer,
    login: loginReducer,
    register: registerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
