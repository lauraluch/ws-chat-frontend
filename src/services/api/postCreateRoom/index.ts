import { api } from "..";
import type { PostCreateRoomPayload } from "./types";

export async function postCreateRoom(payload: PostCreateRoomPayload) {
  await api.post("/rooms", payload);
}
