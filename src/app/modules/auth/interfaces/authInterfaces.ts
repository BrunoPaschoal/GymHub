export type LoginArgs = {
  email: string;
  password: string;
};

export type LoginResponseType = {
  name: string;
  email: string;
  avatar: string | undefined;
  token: string;
};
