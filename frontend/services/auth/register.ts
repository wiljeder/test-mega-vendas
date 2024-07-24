import { api } from "../api";

type TProps = {
  name: string;
  username: string;
  password: string;
};

type TResponse = {};

export async function authRegister({ name, username, password }: TProps) {
  return api.post<TResponse>("/auth/register", {
    name,
    username,
    password,
  });
}
