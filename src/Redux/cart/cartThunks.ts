import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {
  ADD_TO_CART_URL,
  FETCH_CART_URL,
  REMOVE_ITEM_FROM_CART_URL,
  CLEAR_CART_URL,
  UPDATE_CART_ITEM_QUANTITY_URL,
} from "../../urls";
interface AddItemToCartArgs {
  itemId: string;
  quantity: number;
  userId: string;
}

export const addItemToCart = createAsyncThunk(
  "cart/addItem",
  async (
    {itemId, quantity, userId}: AddItemToCartArgs,
    { rejectWithValue}
  ) => {
    try {
      const response = await axios.post(
        ADD_TO_CART_URL
        , {
        userId,
        itemId,
        quantity,
      });
      // update itemCount
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const message =
          (error.response &&
            error.response.data &&
            error.response?.data?.message) ||
          "Failed to fetch user data";
        return rejectWithValue(message);
      }
      throw error;
    }
  }
);

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (userId: string, {rejectWithValue}) => {
    try {
      const response = await axios.get(
        FETCH_CART_URL(userId)
       
      );

      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const message =
          (error.response &&
            error.response.data &&
            error.response?.data?.message) ||
          "Failed to fetch user data";
        return rejectWithValue(message);
      }
      throw error;
    }
  }
);

interface RemoveItemFromCartArgs {
  userId: string;
  itemId: string;
}

export const removeItemFromCart = createAsyncThunk(
  "cart/removeItemFromCart",
  async ({userId, itemId}: RemoveItemFromCartArgs, {rejectWithValue}) => {
    try {
      const response = await axios.delete(
        REMOVE_ITEM_FROM_CART_URL(userId, itemId)
       
      );

      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const message =
          (error.response &&
            error.response.data &&
            error.response?.data?.message) ||
          "Failed to fetch user data";
        return rejectWithValue(message);
      }
      throw error;
    }
  }
);

export const clearCart = createAsyncThunk(
  "cart/clearCart",
  async (userId: string, {rejectWithValue}) => {
    try {
      const response = await axios.delete(
        CLEAR_CART_URL(userId)
      );
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const message =
          (error.response &&
            error.response.data &&
            error.response?.data?.message) ||
          "Failed to fetch user data";
        return rejectWithValue(message);
      }
      throw error;
    }
  }
);

interface UpdateCartItemQuantityArgs {
  userId: string;
  itemId: string;
  quantity: number;
}

export const updateCartItemQuantity = createAsyncThunk(
  "cart/updateCartItemQuantity",
  async (
    {userId, itemId, quantity}: UpdateCartItemQuantityArgs,
    {rejectWithValue}
  ) => {
    try {
      const response = await axios.put(
        UPDATE_CART_ITEM_QUANTITY_URL(userId, itemId),
      
        {
          quantity,
        }
      );
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const message =
          (error.response &&
            error.response.data &&
            error.response?.data?.message) ||
          "Failed to fetch user data";
        return rejectWithValue(message);
      }
      throw error;
    }
  }
);
