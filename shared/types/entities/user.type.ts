export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phoneNumber: string;
  lastLogin: string | Date;
  settings: {
    lang: string;
  };
}
