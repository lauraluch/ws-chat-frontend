import { api } from "..";
import type { PostEnterRoomPayload } from "./types";

export async function postEnterRoom(
  code: string,
  payload: PostEnterRoomPayload
) {
  await api.post(`/rooms/${code}/users`, payload);
}
