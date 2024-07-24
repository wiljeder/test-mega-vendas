import type { TGroup } from "@/types/groups";
import type { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";

export const columns: ColumnDef<TGroup>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "owner",
    header: "Dono",
    cell: ({ row: { original } }) => original.Owner.name,
  },
  {
    accessorKey: "GroupsContacts",
    header: "Quantidade de contatos",
    cell: ({ row: { original } }) => original.GroupsContacts.length,
  },
  {
    id: "actions",
    header: "Ações",
    cell: ({ row: { original } }) => (
      <Link href={`/group/${original.id}`}>
        <FaMagnifyingGlass className="w-4 h-4 text-gray-600" />
      </Link>
    ),
  },
];
