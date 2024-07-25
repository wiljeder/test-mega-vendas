import { nextAuthOptions } from "@/config/next-auth";
import { getServerSession } from "next-auth";
import { CreateGroupForm } from "./components/Form";

export default async function Page() {
  const session = await getServerSession(nextAuthOptions);

  return <CreateGroupForm ownerId={session?.user.id as number} />;
}
