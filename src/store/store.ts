import { configureStore } from '@reduxjs/toolkit';
import restaurantsReducer from './slices/restaurant.slice';
import dishesReducer from './slices/dish.slice';

export const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    dishes: dishesReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
