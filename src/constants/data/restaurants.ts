import picClaro from './../../assets/pictures/claro.png';
import picTiger from './../../assets/pictures/tiger-lily.png';
import picLumina from './../../assets/pictures/Lumina.png';

// Updated mock data to match backend structure
export const restaurants = [
  {
    _id: "1",
    image: picClaro,
    name: "Claro",
    chef: {
      _id: "chef1",
      name: "Ran Shmueli",
      image: "", // Add image path if needed
      description: "Ran Shmueli is a renowned chef",
      restaurants: ["1"],
    },
    dishes: [], // Add dish IDs or mock dishes here if needed
    rating: 5,
  },
  {
    _id: "2",
    image: picLumina,
    name: "Lumina",
    chef: {
      _id: "chef2",
      name: "Meir Adoni",
      image: "", // Add image path if needed
      description: "Meir Adoni is a renowned chef",
      restaurants: ["2"],
    },
    dishes: [], // Add dish IDs or mock dishes here if needed
    rating: 4,
  },
  {
    _id: "3",
    image: picTiger,
    name: "Tiger Lilly",
    chef: {
      _id: "chef3",
      name: "Yanir Green",
      image: "", // Add image path if needed
      description: "Yanir Green is a renowned chef",
      restaurants: ["3"],
    },
    dishes: [], // Add dish IDs or mock dishes here if needed
    rating: 3,
  },
  {
    _id: "4",
    image: picLumina,
    name: "Miznon",
    chef: {
      _id: "chef4",
      name: "Eyal Shani",
      image: "", // Add image path if needed
      description: "Eyal Shani is a renowned chef",
      restaurants: ["4"],
    },
    dishes: [], // Add dish IDs or mock dishes here if needed
    rating: 5,
  },
  {
    _id: "5",
    image: picClaro,
    name: "Bubaleh",
    chef: {
      _id: "chef5",
      name: "Assaf Granit",
      image: "", // Add image path if needed
      description: "Assaf Granit is a renowned chef",
      restaurants: ["5"],
    },
    dishes: [], // Add dish IDs or mock dishes here if needed
    rating: 4,
  },
  {
    _id: "6",
    image: picTiger,
    name: "OCD",
    chef: {
      _id: "chef6",
      name: "Raz Rahav",
      image: "", // Add image path if needed
      description: "Raz Rahav is a renowned chef",
      restaurants: ["6"],
    },
    dishes: [], // Add dish IDs or mock dishes here if needed
    rating: 3,
  },
];
