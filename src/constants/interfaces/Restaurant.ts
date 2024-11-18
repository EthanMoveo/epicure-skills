import { Chef } from "./Chef";
import { Dish } from "./Dish";


export interface Restaurant {
  _id: string;
  name: string;
  image: string;
  chef: Chef | null; 
  dishes: Dish[];
  rating: number;
}

