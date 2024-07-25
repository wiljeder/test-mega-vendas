import { nextAuthOptions } from "@/config/next-auth";
import { DEFAULT_AUTHORIZED } from "@/lib/routes";
import { groupGetById } from "@/services/group/getById";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { NextRequest } from "next/server";
import { Group } from "./components/Group";

export default async function Page({ params }: { params: { id: number } }) {
  const session = await getServerSession(nextAuthOptions);

  const { data: group } = await groupGetById({ id: params.id });

  if (!group) {
    return (
      <div className="flex flex-col text-center gap-y-2">
        <h1>Grupo não encontrado</h1>
        <Link href={DEFAULT_AUTHORIZED}>
          <p className="text-sm text-blue-600 hover:underline">
            Voltar para o início
          </p>
        </Link>
      </div>
    );
  }
  return <Group group={group} />;
}
