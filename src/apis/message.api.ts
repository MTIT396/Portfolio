import http from "@/lib/axios";
import { MessageRequest, MessageResponse } from "@/types/message.type";
export const createMessage = async (
  payload: MessageRequest,
): Promise<MessageResponse> => {
  const response = await http.post<MessageResponse>("/api/messages", payload);
  return response.data;
};
