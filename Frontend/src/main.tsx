import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { FormProvider } from "./contexts/FormContext.tsx";

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FormProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FormProvider>
  </StrictMode>
);
