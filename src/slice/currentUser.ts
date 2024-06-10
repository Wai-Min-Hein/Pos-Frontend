import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define types for the state
interface UserState {
  currentUser: User | null;
  errorMessage: string | null;
  loading: boolean | null;
}

// Define a type for the user
interface User {
  id: string;
  email: string;
  password: number;
}

const initialState: UserState = {
  currentUser: null,
  errorMessage: null,
  loading: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.errorMessage = null;
    },
    signInSuccess: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.errorMessage = null;
    },
    signInFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    signUpStart: (state) => {
      state.loading = true;
      state.errorMessage = null;
    },
    signUpSuccess: (state) => {
      state.loading = false;
      state.errorMessage = null;
    },
    signUpFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    logOutStart: (state) => {
      state.loading = true;
      state.errorMessage = null;
    },
    logOutSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.errorMessage = null;
    },
    logOutFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  logOutStart,
  logOutSuccess,
  logOutFailure,
  signUpStart,
  signUpSuccess,
  signUpFailure,
} = userSlice.actions;

export default userSlice.reducer;
