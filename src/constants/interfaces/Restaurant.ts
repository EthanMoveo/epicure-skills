import { Chef } from "./Chef";

export interface Restaurant {
    id: number;
    name: string;
    image: string;
    chef: Chef | null; 
    rating: number;
  }
  
  