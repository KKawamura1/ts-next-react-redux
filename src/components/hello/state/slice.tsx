import { Action } from "./action";
import { createSlice } from "@reduxjs/toolkit";

export type State = {
  count: number;
};

export const select = (state: any): State => state.hello;
const slice = createSlice({
  name: "hello",
  initialState: {
    count: 0,
  } as State,
  reducers: {
    countUp: (state, action: Action<{}>) => {
      state.count += 1;
    },
  },
  extraReducers: (builder) => {},
});

export const reducer = slice.reducer;
export const { countUp } = slice.actions;
