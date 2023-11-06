export type Product = {
  id: string;
  createdAt: string;
  name: string;
  image: string;
  price: string;
  description: string;
  model: string;
  brand: string;
};

export enum ProductSortType {
  old,
  new,
  highPrice,
  lowPrice,
}
