import http from "@/lib/axios";
import { CommentRequest, CommentResponse } from "@/types/comment.type";
export const createComment = async ({
  name,
  message,
  avatar,
}: CommentRequest): Promise<CommentResponse> => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("message", message);
  if (avatar) formData.append("avatar", avatar);

  const { data } = await http.post("/api/comments", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};
export const getComments = async () => {
  const response = await http.get<CommentResponse>("/api/comments");
  return response.data;
};
