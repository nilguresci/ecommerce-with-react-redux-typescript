export type BasketStateType = {
  basket: Basket[];
};

export type Basket = {
  id: string;
  price: number;
  name: string;
  count: number;
};
