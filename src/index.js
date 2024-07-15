import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/index.scss";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
