import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CityInfoProvider } from "./context/CityInfoContext";
import { FahrenheitProvider } from "./context/FahrenheitContext.tsx";
import { DarkModeProvider } from "./context/DarkModeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DarkModeProvider>
      <CityInfoProvider>
        <FahrenheitProvider>
          <App />
        </FahrenheitProvider>
      </CityInfoProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
