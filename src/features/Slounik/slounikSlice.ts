import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dictionary } from "types";

interface SlounikState {
  dictionary: null | Dictionary[];
}

const initialState: SlounikState = {
  dictionary: null,
};

export const slounikSlice = createSlice({
  name: "slounik",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Dictionary[]>) => {
      state.dictionary = action.payload;
    },
  },
});

export const { add } = slounikSlice.actions;

export default slounikSlice.reducer;
