import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// import './index.css'

if (process.env.NODE_ENV != "development") {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
}

// console.log(import.meta.env.VITE_REACT_APP_TEST)