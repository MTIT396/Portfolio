export interface CommentResponse {
  data: Comment[];
  success: boolean;
  message: string;
}
export interface CommentRequest {
  name: string;
  message: string;
  avatar?: File | null;
}
export interface Comment {
  _id: string;
  name: string;
  message: string;
  avatarUrl?: string;
  createdAt: string;
}
