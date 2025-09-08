import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import App from "./App.tsx";
import { Wrapper } from "./components/commons/structure/Wrapper/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Wrapper>
      <App />
    </Wrapper>
  </StrictMode>
);
