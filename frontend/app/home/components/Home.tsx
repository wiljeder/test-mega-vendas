"use client";

import { DataTable } from "@/components/DataTable";
import { TGroup } from "@/types/groups";
import { columns } from "./GroupTable/columns";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {
  groups: TGroup[];
};

export function Home({ groups }: Props) {
  return (
    <div className="flex flex-col gap-y-6 w-full p-8">
      <div className="flex justify-between">
        <h1 className="text-5xl font-medium">GRUPOS</h1>
        <Button asChild>
          <Link href="/group/create">Novo Grupo</Link>
        </Button>
      </div>
      <DataTable columns={columns} data={groups} />
    </div>
  );
}
