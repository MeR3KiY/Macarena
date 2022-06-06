import { Post } from "./post.model";
export interface User {
  mail?: string;
  name?: string;
  password?: string;
  duplicate?: string;
  id: number;
}
