import NextAuth, { DefaultSession } from "next-auth";
import type { TUser } from "./user";

declare module "next-auth" {
  interface Session {
    user: {
      accessToken: string;
    } & TUser &
      DefaultSession["user"];
  }
}
