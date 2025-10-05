// src/services/socket.ts
import { io } from "socket.io-client";

const socketURL = import.meta.env.VITE_SERVER_PATH;

// se o back está rodando localmente na sua máquina:
export const socket = io(`http://${socketURL || "localhost"}:3001`, {
  transports: ["websocket"],
});
