import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InitialPage } from "../components/pages/InitialPage";
import { ChatPage } from "../components/pages/ChatPage";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
}
