import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter basename="/sign_signup_validation">
      <CssBaseline />
      <App />
    </BrowserRouter>
);
