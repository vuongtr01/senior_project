import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import SnackbarContainer from "./common/SnackbarContainer";

document.addEventListener("turbo:load", () => {
  const root = createRoot(
    document.body.appendChild(document.createElement("div"))
  );
  root.render(
    <SnackbarContainer>
      <App />
    </SnackbarContainer>
  );
});