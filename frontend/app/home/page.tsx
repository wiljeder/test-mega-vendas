import { nextAuthOptions } from "@/config/next-auth";
import { groupGetByOwnerId } from "@/services/group/getByOwnerId";
import { getServerSession } from "next-auth";
import { Home } from "./components/Home";

export default async function Page() {
  const session = await getServerSession(nextAuthOptions);

  const { data: userGroups } = await groupGetByOwnerId({
    id: session?.user?.id as number,
  });

  return (
    <main>
      <Home groups={userGroups} />
    </main>
  );
}
