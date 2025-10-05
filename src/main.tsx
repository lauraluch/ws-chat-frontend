import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { Wrapper } from "./components/commons/structure/Wrapper/index.tsx";
import { AppRoutes } from "./routes/index.tsx";
import { ChatContextProvider } from "./services/contexts/useChatContext/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChatContextProvider>
      <Wrapper>
        <AppRoutes />
      </Wrapper>
    </ChatContextProvider>
  </StrictMode>
);
