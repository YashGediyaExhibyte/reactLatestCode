import axios from "axios";
import { type ProductData } from "../components/types/productTypes";

const getProduct = async (): Promise<ProductData[]> => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const productService = {
  getProduct,
};
