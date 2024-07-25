import { api } from "../api";
import { User } from "next-auth";

type TProps = {
  name: string;
  username: string;
  password: string;
};

type TResponse = User;

export async function authRegister({ name, username, password }: TProps) {
  return api.post<TResponse>("/auth/register", {
    name,
    username,
    password,
  });
}
