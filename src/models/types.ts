export type Tproducts = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images:string[]
}

export type Tresponse = {
  products: Tproducts[];
  total: number;
  skip: number;
  limit: number;
}