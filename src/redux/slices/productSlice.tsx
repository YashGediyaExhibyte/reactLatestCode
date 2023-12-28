import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productService } from "../../services/productService";
import { type ProductData } from "../../components/types/productTypes";

interface ProductState {
  loading: boolean;
  list: ProductData[];
  error: boolean;
}

const initialState: ProductState = {
  loading: false,
  list: [],
  error: false,
};

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    return await productService.getProduct();
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload;
    });

    builder.addCase(fetchProduct.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default productSlice.reducer;
