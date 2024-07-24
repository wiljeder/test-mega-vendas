import { nextAuthOptions } from "@/config/next-auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Home } from "./Home";

export default async function Page() {
  const session = await getServerSession(nextAuthOptions);

  if (!session) redirect("/auth/login");

  return <Home />;
}
