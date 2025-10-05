// src/services/socket.ts
import { io } from "socket.io-client";

// se o back está rodando localmente na sua máquina:
export const socket = io("http://localhost:3001", {
  transports: ["websocket"],
});
