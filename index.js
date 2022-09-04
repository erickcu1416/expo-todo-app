import React from "react";
import ReactDOM from "react-dom/client";
import { StatusBar } from "react-native";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <App />
    <StatusBar style='auto' />
  </>
);
