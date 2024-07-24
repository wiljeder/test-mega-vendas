import type { User } from "next-auth";
import { api } from "../api";

type TProps = {
  username: string;
  password: string;
};

type TResponse = User | null;

export async function authLogin({ username, password }: TProps) {
  return api.post<TResponse>("/auth/login", {
    username,
    password,
  });
}
