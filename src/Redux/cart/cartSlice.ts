import {createSlice} from "@reduxjs/toolkit";
import {
  addItemToCart,
  fetchCart,
  removeItemFromCart,
  clearCart,
  updateCartItemQuantity,
} from "./cartThunks";

interface CartItem {
  [x: string]: any;
  _id: string;
  quantity: number;
  // add any other properties of the cart item here
}

interface CartState {
  items: CartItem[];
  loading: boolean;
  error: string | null;
  userId: string | null;
  itemCount: number; // add the itemCount property
}

const initialState: CartState = {
  items: [],
  loading: false,
  error: null,
  userId: null,
  itemCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCart(state) {
      state.items = [];
      state.loading = false;
      state.error = null;
      state.userId = null;
      state.itemCount = 0;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addItemToCart.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        state.loading = false;

        state.items = action.payload.cart.items || []; // Set default value as an empty array if undefined
        state.error = null;

        // Calculate and store the itemCount
        state.itemCount = state.items.reduce(
          (count, item) => count + item.quantity,
          0
        );
      })
      .addCase(addItemToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string | null;
      })
      .addCase(fetchCart.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;

        state.items = action.payload.cart.items || []; // Set default value as an empty array if undefined
        state.error = null;

        // Calculate and store the itemCount
        state.itemCount = state.items.reduce(
          (count, item) => count + item.quantity,
          0
        );
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string | null;
      })
      .addCase(removeItemFromCart.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeItemFromCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.cart.items;
        state.itemCount = state.items.length;
      })
      .addCase(removeItemFromCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string | null;
      })
      .addCase(clearCart.fulfilled, state => {
        state.loading = false;
        state.items = [];
        state.itemCount = 0;
      })
      .addCase(clearCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string | null;
      })
      .addCase(updateCartItemQuantity.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCartItemQuantity.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.itemCount = state.items.length;
      })
      .addCase(updateCartItemQuantity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string | null;
      });
  },
});

export const {resetCart} = cartSlice.actions;

export default cartSlice.reducer;
