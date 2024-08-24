import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Create user action using axios
export const createUserData = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://66c835ce732bf1b79fa891a2.mockapi.io/std_data', data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Read all user data
export const ReadUserData = createAsyncThunk(
  "ReadUserData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://66c835ce732bf1b79fa891a2.mockapi.io/std_data');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Delete specific user data using ID
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`https://66c835ce732bf1b79fa891a2.mockapi.io/std_data/${id}`);
      return id; // Return ID so it can be removed from state
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Update specific user data using ID
export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.put(`https://66c835ce732bf1b79fa891a2.mockapi.io/std_data/${data.id}`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const getUser = createSlice({
  name: "userDetails",
  initialState: {
    user: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      // Create user
      .addCase(createUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.user.push(action.payload);
      })
      .addCase(createUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Read user data
      .addCase(ReadUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(ReadUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(ReadUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete user
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = state.user.filter((user) => user.id !== action.payload);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update user
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.user.findIndex((user) => user.id === action.payload.id);
        if (index !== -1) {
          state.user[index] = action.payload;
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default getUser.reducer;
