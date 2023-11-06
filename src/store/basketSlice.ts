import { createSlice } from "@reduxjs/toolkit";
import { BasketStateType } from "../models/basket";
import { getValueWithKey, setValueWithKey } from "../helpers/storage.helper";

const localStorageBasket = getValueWithKey("basket");

const initialState: BasketStateType = {
  basket: localStorageBasket ? JSON.parse(localStorageBasket) : [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state: BasketStateType, action) => {
      let product = action.payload;
      let isExist = state.basket.find((item) => item.id === product.id);
      if (isExist) {
        state.basket = state.basket.map((basketItem) => {
          if (basketItem.id === product.id) basketItem.count++;
          return basketItem;
        });
      } else {
        state.basket.push({
          price: product.price,
          id: product.id,
          name: product.name,
          count: 1,
        });
      }
      setValueWithKey("basket", state.basket);
    },
    removeFromBasket: (state: BasketStateType, action) => {
      let id = action.payload;
      let isExist = state.basket.find((item) => item.id === id);
      if (isExist && isExist.count > 1) {
        state.basket = state.basket.map((item) => {
          if (item.id === id) {
            item.count--;
          }
          return item;
        });
      } else {
        state.basket = state.basket.filter((item) => item.id !== id);
      }
      setValueWithKey("basket", state.basket);
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
