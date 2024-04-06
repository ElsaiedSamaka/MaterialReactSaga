export interface User {
  firstname: string;
  lastname: string;
  email: string;
  username?: string;
  role: 'user' | 'admin' | 'seller';
  phone?: string;
  isEmailVerified: boolean;
  address?: string;
  companyName?: string;
  password?: string;
  passwordConfirmation?: string;
  passwordChangedAt?: Date;
  profileImage?: string;
  discountCode?: string;
  socketId?: string;
  _id: string;
}
