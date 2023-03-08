import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  user: {
    login: string;
    isLoggedIn: boolean;
  };
}

const initialState: CounterState = {
  user: {
    login: "",
    isLoggedIn: false,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    //   state.user += 1;
    },
    decrement: (state) => {
    //   state.user -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    updateUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase("user/login", (state, action: any) => {
  //         state.user = action.payload;
  //       })
  //       .addCase("user/logout", (state, action) => {
  //         state.user = null;
  //       });
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, updateUser } =
  userSlice.actions;

export default userSlice.reducer;
