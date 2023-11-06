import axios, { AxiosPromise } from "axios";
import { Product } from "../models/product";

const API_URL = "https://5fc9346b2af77700165ae514.mockapi.io/products";

//get products
const getProducts = async () => {
  const data = await axios.get(API_URL);
  return data.data;
};

const getOneProduct = async (id: string): AxiosPromise<Product> => {
  return await axios.get(API_URL + `/${id}`);
};

export { getProducts, getOneProduct };
