import {ImageSourcePropType} from "react-native";

interface User {
  name: string;
  profile: ImageSourcePropType;
}

export const user: User = {
  name: "fahad",
  profile: require("../../assets/zorik-d-1hqKq6uJjUM-unsplash.jpg"),
};

interface Ingredient {
  id: number;
  name: String;
  image: ImageSourcePropType;
}

export interface Food {
  id: number;
  title: string;
  price: number;
  description: string;
  image: ImageSourcePropType;
  cover: ImageSourcePropType;
  ingredients: Ingredient[];
  size: string;
  reviewsCount: number;
  rating: number;
}

const ingredients: Ingredient[] = [
  {
    name: "Fresh Vegetables",
    id: 1,
    image: require("../../assets/ingredients/dose-juice-j_YWoV_uzRw-unsplash.jpg"),
  },
  {
    name: "Organic Fruits",
    id: 2,
    image: require("../../assets/ingredients/monika-grabkowska-pCxJvSeSB5A-unsplash.jpg"),
  },
  {
    name: "Grains",
    id: 3,
    image: require("../../assets/ingredients/wolfgang-hasselmann-UcNhoxAs6PQ-unsplash.jpg"),
  },
];

export const Foods: Food[] = [
  {
    id: 1,
    image: require("../../assets/food/nadine-primeau-N7_uZpi-4Ug-unsplash.jpg"),
    cover: require("../../assets/food/sestrjevitovschii-ina-7zfQ6sbWVyE-unsplash.jpg"),
    description: "A nutritious and delicious salad",
    title: "Healthy Salad",
    price: 9.99,
    ingredients,
    size: "Medium",
    rating: 4,
    reviewsCount: 132,
  },
  {
    id: 2,
    image: require("../../assets/food/sestrjevitovschii-ina-7zfQ6sbWVyE-unsplash.jpg"),
    cover: require("../../assets/food/nadine-primeau-N7_uZpi-4Ug-unsplash.jpg"),
    description: "Delicious pasta dish with fresh ingredients",
    title: "Pasta Delight",
    price: 11.99,
    ingredients,
    size: "Large",
    rating: 4,
    reviewsCount: 132,
  },
  {
    id: 3,
    image: require("../../assets/food/yesmore-content-yB0Bm2QqChQ-unsplash.jpg"),
    cover: require("../../assets/food/nadine-primeau-N7_uZpi-4Ug-unsplash.jpg"),
    description: "Refreshing fruit smoothie for a healthy treat",
    title: "Fruit Smoothie",
    price: 6.99,
    ingredients,
    size: "Regular",
    rating: 4,
    reviewsCount: 132,
  },
  {
    id: 4,
    image: require("../../assets/food/fernando-andrade-_P76trHTWDE-unsplash.jpg"),
    cover: require("../../assets/food/nadine-primeau-N7_uZpi-4Ug-unsplash.jpg"),
    description: "Classic pepperoni pizza slice",
    title: "Pepperoni Pizza",
    price: 8.99,
    ingredients,
    size: "Large",
    rating: 4,
    reviewsCount: 132,
  },
  {
    id: 5,
    image: require("../../assets/food/sestrjevitovschii-ina-7zfQ6sbWVyE-unsplash.jpg"),
    cover: require("../../assets/food/nadine-primeau-N7_uZpi-4Ug-unsplash.jpg"),
    description: "Juicy burger with all the fixings",
    title: "Deluxe Burger",
    price: 12.99,
    ingredients,
    size: "Regular",
    rating: 4,
    reviewsCount: 132,
  },
  {
    id: 6,
    image: require("../../assets/food/natallia-nagorniak-dvd1NSoteHg-unsplash.jpg"),
    cover: require("../../assets/food/nadine-primeau-N7_uZpi-4Ug-unsplash.jpg"),
    description: "Creamy vanilla ice cream cone",
    title: "Vanilla Ice Cream",
    price: 4.99,
    ingredients,
    size: "Small",
    rating: 4,
    reviewsCount: 132,
  },

  // ... Add more food items here
];
