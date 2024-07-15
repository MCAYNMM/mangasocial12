import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sv: 1,
  loading: true,
};

export const serverSlice = createSlice({
  name: "server",
  initialState,
  reducers: {
    changeServer: (state, action) => {
      const sv = action.payload;

      state.sv = sv;
    },
    setIsLoading: (state, action) => {
      const loading = action.payload;
      state.loading = loading;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeServer, setIsLoading } = serverSlice.actions;

export default serverSlice.reducer;
