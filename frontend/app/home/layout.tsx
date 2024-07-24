import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/config/next-auth";
import { Header } from "./components/Header";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(nextAuthOptions);

  return (
    <main className="flex flex-col flex-grow overflow-hidden">
      <Header name={session?.user.name as string} />
      <div className="flex pt-[72px] flex-1 overflow-hidden">{children}</div>
    </main>
  );
}
