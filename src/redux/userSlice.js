import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "./api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const fetchMe = createAsyncThunk("user/fetchMe", async (_, thunkAPI) => {
  try {
    const response = await API.get("/users/me");
    return response.data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const fetchAllUsers = createAsyncThunk(
  "user/fetchAllUsers",
  async (_, thunkAPI) => {
    try {
      const response = await API.get("/users");
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchOneUser = createAsyncThunk(
  "user/fetchOneUser",
  async ({ userId, thunkAPI }) => {
    try {
      const response = await API.get(`/users/${userId}`);
      return response.data.data;
      // return userId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateMe = createAsyncThunk(
  "user/updateMe",
  async ({ userData, thunkAPI }) => {
    try {
      const response = await API.patch(`/users/myProfile`, userData);
      toast.success("Update successful!");
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateMinime = createAsyncThunk(
  "user/updateMinime",
  async ({ images, thunkAPI }) => {
    try {
      const response = await API.patch(`/users/me/picture`, images);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async ({ userId, thunkAPI }) => {
    try {
      const response = await API.patch(`/users/${userId}`);
      return response.data;
      // return userId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchUserItems = createAsyncThunk(
  "user/fetchUserItems",
  async ({ userId, thunkAPI }) => {
    try {
      const response = await API.get(`/users/${userId}/items`);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//
export const updateUserState = createAsyncThunk(
  "user/updateUserState",
  async ({ userId, active, thunkAPI }) => {
    try {
      const response = await API.patch(`/users/state/${userId}`, { active });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    error: null,
    success: false,
    users: [],
    me: null,
    user: null,
    userItems: [],
    image: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMe.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.loading = false;
        state.me = action.payload; // action.payload.data 대신 action.payload 사용
      })
      .addCase(fetchMe.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      })
      .addCase(fetchUserItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserItems.fulfilled, (state, action) => {
        state.loading = false;
        state.userItems = action.payload; // action.payload.data 대신 action.payload 사용
      })
      .addCase(fetchUserItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      })
      .addCase(updateMe.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateMe.fulfilled, (state, action) => {
        state.loading = false;
        state.me = action.payload; // action.payload.data 대신 action.payload 사용
      })
      .addCase(updateMe.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      })
      .addCase(updateMinime.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateMinime.fulfilled, (state, action) => {
        state.loading = false;
        state.image = action.payload; // action.payload.data 대신 action.payload 사용
      })
      .addCase(updateMinime.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.me = action.payload; // action.payload.data 대신 action.payload 사용
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      })
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload; // action.payload.data 대신 action.payload 사용
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      })

      .addCase(fetchOneUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOneUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // action.payload.data 대신 action.payload 사용
      })
      .addCase(fetchOneUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      })
      .addCase(updateUserState.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserState.fulfilled, (state, action) => {
        state.loading = false;
        state.me = action.payload; // action.payload.data 대신 action.payload 사용
      })
      .addCase(updateUserState.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      });
  },
});
export default userSlice.reducer;
