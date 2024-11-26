import { Tag } from "./Tag";

export interface Dish {
  id: number;
  name: string;
  image: string;
  price: number;
  tags: Tag[];
  ingredients: string;
}