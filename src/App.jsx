import { useState } from "react";
import { RouterProvider, Router } from "react-router-dom";
import { router } from "./app/index";
import MyContextProvider from "./components/helpers/context.jsx";

import "./common.css";

function App() {
  return (
    <MyContextProvider>
      <RouterProvider router={router} />
    </MyContextProvider>
  );
}

export default App;
