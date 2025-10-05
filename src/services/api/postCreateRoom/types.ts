import type { User } from "../../../types/User";

export interface PostCreateRoomPayload {
  code: string;
  ownerSocketId: string;
  ownerName: string;
  user: User;
}
