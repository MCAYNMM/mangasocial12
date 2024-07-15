import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  readmode: false,
};

export const readModeSlice = createSlice({
  name: "ReadMode",
  initialState,
  reducers: {
    changeReadMode: (state, action) => {
      const readmode = action.payload;

      state.readmode = readmode;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeReadMode } = readModeSlice.actions;

export default readModeSlice.reducer;
