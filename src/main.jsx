import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import Header from "./components/header/Header";

const App = () => {
  return (
    <div className="">
      <Header />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
