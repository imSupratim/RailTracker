import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(

    <BrowserRouter>
      <AuthProvider>
        <Toaster position="top-center" />
        <App />
      </AuthProvider>
    </BrowserRouter>

);
