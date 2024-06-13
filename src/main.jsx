import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyles } from "./reset";
import QueryClientSetup from "./QueryClientSetup";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <QueryClientSetup>
        <GlobalStyles />
        <App />
      </QueryClientSetup>
    </>
  </React.StrictMode>
);
