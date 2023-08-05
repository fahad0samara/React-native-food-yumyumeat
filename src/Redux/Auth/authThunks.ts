import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
// import { clearUserData } from "./authSlice";
import {REGISTER_URL, LOGIN_URL, LOGOUT_URL, FETCH_USER_URL} from "../../urls";

export interface UserData {
  _id?: string;
  firstName: string;

  email: string;
  password: string;
  role: string;
}
interface LoginResponse {
  user: unknown;
  isAdmin: boolean;
  token: string;
}

interface User {
  user: unknown;
  isAdmin: boolean;
  id: number;
  email: string;
  name: string;
}

// Register user
// Register user
export const register = createAsyncThunk<
  User,
  UserData,
  {rejectValue: {message: string; statusCode: number}}
>("auth/register", async (userData, {rejectWithValue}) => {
  try {
    const response = await axios.post<User>(REGISTER_URL, userData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        "Failed to fetch user data";
      return rejectWithValue({
        message,
        statusCode: error.response?.status || 500,
      });
    }
    throw error;
  }
});

// Login user
export const login = createAsyncThunk<
  LoginResponse,
  UserData,
  { rejectValue: { message: string } } 
>("auth/login", async (credentials, {rejectWithValue}) => {
  try {
    const response = await axios.post<LoginResponse>(
      LOGIN_URL,
  
      credentials
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message =
        (error.response &&
          error.response.data &&
          error.response?.data?.message) ||
        "Failed to fetch user data";
     return rejectWithValue({message});
    }
    throw error;
  }
});

// Logout user
export const logout = createAsyncThunk<void, void,   { rejectValue: { message: string } } >(
  "auth/logout",
  async (_, {dispatch, rejectWithValue}) => {
    const token = localStorage.getItem("token");
    if (!token) {
      
      return;
    }
    try {
      await axios.post(
        LOGOUT_URL
      ,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // fv

      return;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message || "Failed to fetch user data";
    return rejectWithValue({message});
      }
      throw error;
    }
  }
);
// ...
export const fetchUserData = createAsyncThunk<
  User,
  void,
  {rejectValue: {message: string; error: string}}
>("auth/fetchUserData", async (_, thunkAPI) => {
  const token = localStorage.getItem("token");

  if (!token) {
    thunkAPI.dispatch(logout()); // Logout the user if token is not available
    return thunkAPI.rejectWithValue({
      message: "User is not authenticated",
      error: "",
    });
  }

  try {
    const response = await axios.get<User>(
      FETCH_USER_URL,
   
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message || "Failed to fetch user data";
      const err = error.response?.data?.error || error.message;
      return thunkAPI.rejectWithValue({message, error: err});
    }
    throw error;
  }
});
