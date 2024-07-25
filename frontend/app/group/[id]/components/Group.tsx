"use client";

import { DataTable } from "@/components/DataTable";
import { columns } from "./ContactTable/columns";
import type { TGroup } from "@/types/groups";

type Props = {
  group: TGroup;
};

export function Group({ group }: Props) {
  return (
    <div className="flex flex-col gap-y-6 w-full p-8">
      <h1 className="text-5xl font-medium">{group.name.toUpperCase()}</h1>
      <DataTable columns={columns} data={group.GroupsContacts} />
    </div>
  );
}
