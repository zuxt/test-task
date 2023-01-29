import { Tresponse, Tproducts } from '../models/types';
const base = process.env.REACT_APP_DUMMYREST_BASE_URL;

export const getAllproducts = async (): Promise<Tresponse> => {
  return fetch(`${base}/products?limit=100`).then((res) => res.json());
};

export const getSingleProduct = async (id: number): Promise<Tproducts> => {
  return fetch(`${base}/products/${id}`).then((res) => res.json());
};

export const searchProducts = async (name: string): Promise<Tresponse> => {
  return fetch(`${base}/products/search?q=${name}`).then((res) => res.json());
};

export const getCategories = async (): Promise<string[]> => {
  return fetch(`${base}/products/categories`).then((res) => res.json());
};

export const getProductsByCategorie = async (
  categorie: string
): Promise<Tresponse> => {
  return fetch(`${base}/products/category/${categorie}`).then((res) =>
    res.json()
  );
};
