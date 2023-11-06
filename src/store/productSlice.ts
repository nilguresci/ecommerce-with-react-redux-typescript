import { Product } from "../models/product";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as productService from "../services/product.service";
import { ProductSortType } from "../models/product";

type ProductsStateType = {
  products: Product[];
  selectedBrands: string[];
  selectedModels: string[];
  searchValue: string;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
};
const initialState: ProductsStateType = {
  products: [],
  selectedBrands: [],
  selectedModels: [],
  searchValue: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getProducts = createAsyncThunk(
  "/product/getProducts",
  async (_, thunkAPI) => {
    try {
      return await productService.getProducts();
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    reset: (state: ProductsStateType) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
    sortProducts: (state: ProductsStateType, action) => {
      let sortType = action.payload;

      switch (sortType) {
        case ProductSortType.old:
          state.products = state.products.sort(
            (p1, p2) =>
              new Date(p1.createdAt).getTime() -
              new Date(p2.createdAt).getTime()
          );
          break;
        case ProductSortType.new:
          state.products = state.products.sort(
            (p1, p2) =>
              new Date(p2.createdAt).getTime() -
              new Date(p1.createdAt).getTime()
          );

          break;
        case ProductSortType.highPrice:
          state.products = state.products.sort(
            (p1, p2) => Number(p2.price) - Number(p1.price)
          );
          break;
        case ProductSortType.lowPrice:
          state.products = state.products.sort(
            (p1, p2) => Number(p1.price) - Number(p2.price)
          );
          break;

        default:
          break;
      }
    },
    setSelectedBrands: (state: ProductsStateType, action) => {
      state.selectedBrands = action.payload;
    },
    setSelectedModels: (state: ProductsStateType, action) => {
      state.selectedModels = action.payload;
    },
    setSearchValue: (state: ProductsStateType, action) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state: ProductsStateType) => {
        state.isLoading = true;
      })
      .addCase(
        getProducts.fulfilled,
        (state: ProductsStateType, action: any) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.products = action.payload;
        }
      )
      .addCase(
        getProducts.rejected,
        (state: ProductsStateType, action: any) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        }
      );
  },
});

export const {
  reset,
  sortProducts,
  setSearchValue,
  setSelectedBrands,
  setSelectedModels,
} = productSlice.actions;
export default productSlice.reducer;
