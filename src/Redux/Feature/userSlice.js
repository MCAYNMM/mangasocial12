import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  id_user: "",
  jwt: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const { email = "", id_user = "", jwt = "" } = action.payload;

      state.email = email;
      state.id_user = id_user;
      state.jwt = jwt;
    },
    resetUser: (state) => {
      state.email = "";
      state.id_user = "";
      state.jwt = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
