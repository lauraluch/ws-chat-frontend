import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InitialPage } from "../components/pages/InitialPage";
import { ChatPage } from "../components/pages/ChatPage";
import { ChatContextProvider } from "../services/contexts/useChatContext";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <ChatContextProvider>
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </ChatContextProvider>
    </BrowserRouter>
  );
}
