export interface IUser {
  name: string;
  email: string;
  id: string;
  admin: boolean;
  createdAt: string;
  updatedAt: string;
  profilePhoto: {
    id: string;
    url: string;
    createdAt: string;
    updatedAt: string;
  };
}
