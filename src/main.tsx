import ReactDOM from "react-dom/client";
import {  HashRouter } from "react-router-dom";
import App from "./App";
import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <HashRouter>
      <CssBaseline />
      <App />
    </HashRouter>
);
