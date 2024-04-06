import { User } from '../models';
export type Message = {
  id: number;
  content?: string;
  createdAt: string;
  author: User;
};
