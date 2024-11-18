import { Restaurant } from "./Restaurant";

export interface Dish {
  _id: string;
  image: string;
  name: string;
  price: number;
  ingredients: string[];
  tags: string[];
  restaurant: Restaurant;
}