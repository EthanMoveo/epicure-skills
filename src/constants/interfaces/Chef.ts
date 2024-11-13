import { Restaurant } from "./Restaurant";

export interface Chef {
    _id: string;
    name: string;
    image: string;
    description: string;
    restaurants: Restaurant[];
  }