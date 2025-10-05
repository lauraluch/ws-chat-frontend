import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { Wrapper } from "./components/commons/structure/Wrapper/index.tsx";
import { AppRoutes } from "./routes/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Wrapper>
      <AppRoutes />
    </Wrapper>
  </StrictMode>
);
