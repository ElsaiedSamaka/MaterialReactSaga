import { User } from './index';
export type Conversation = {
  id: number;
  creator: User;
  recipient: User;
  createdAt: string;
};
