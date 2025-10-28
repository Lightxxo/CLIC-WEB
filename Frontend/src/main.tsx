import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { FormProvider } from "./contexts/FormContext.tsx";

import { BrowserRouter } from "react-router-dom";
import { PoolProvider } from "./contexts/PoolContext.tsx";
import ToasterLayout from "./layouts/ToasterLayout.tsx";
import { InviteProvider } from "./contexts/InviteContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PoolProvider>
      <FormProvider>
        <InviteProvider>
          <BrowserRouter>
            <ToasterLayout>
              <App />
            </ToasterLayout>
          </BrowserRouter>
        </InviteProvider>
      </FormProvider>
    </PoolProvider>
  </StrictMode>
);
