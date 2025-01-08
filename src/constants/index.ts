import { Product } from "../@types";

export const products: Product[] = [
  {
    id: 1,
    name: "Product A",
    category: "Electronics",
    price: 100,
    brand: "Brand X",
    rating: 4.5,
    color: "Red",
  },
  {
    id: 2,
    name: "Product B",
    category: "Clothing",
    price: 50,
    brand: "Brand Y",
    rating: 4.0,
    color: "Blue",
  },
  {
    id: 3,
    name: "Product C",
    category: "Electronics",
    price: 200,
    brand: "Brand X",
    rating: 5.0,
    color: "Black",
  },
  {
    id: 4,
    name: "Product D",
    category: "Books",
    price: 30,
    brand: "Brand Z",
    rating: 3.5,
    color: "White",
  },
  {
    id: 5,
    name: "Product E",
    category: "Electronics",
    price: 100,
    brand: "Brand X",
    rating: 4.5,
    color: "Red",
  },
  {
    id: 6,
    name: "Product F",
    category: "Clothing",
    price: 50,
    brand: "Brand Y",
    rating: 4.0,
    color: "Blue",
  },
  {
    id: 7,
    name: "Product G",
    category: "Electronics",
    price: 200,
    brand: "Brand X",
    rating: 5.0,
    color: "Black",
  },
  {
    id: 8,
    name: "Product H",
    category: "Books",
    price: 30,
    brand: "Brand Z",
    rating: 3.5,
    color: "White",
  },
];

export const categories = ["Electronics", "Clothing", "Books"];
export const brands = ["Brand X", "Brand Y", "Brand Z"];
export const colors = ["Red", "Blue", "Black", "White"];
export const priceRanges: [string, [number, number]][] = [
  ["Under $50", [0, 50]],
  ["$50 - $100", [50, 100]],
  ["Over $100", [100, Infinity]],
];
