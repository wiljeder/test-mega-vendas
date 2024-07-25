import { nextAuthOptions } from "@/config/next-auth";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";

export default async function Page(req: NextRequest) {
  const session = await getServerSession(nextAuthOptions);

  return <p>Detalhes do grupo</p>;
}
