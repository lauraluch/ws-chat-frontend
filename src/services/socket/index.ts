// src/services/socket.ts
import { io } from "socket.io-client";

// se o back está rodando localmente na sua máquina:
export const socket = io(`http://2d7e3bc585a3.ngrok-free.app`, {
  transports: ["websocket"],
});
