import { TContact } from "@/types/contact";
import type { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<TContact>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "phone",
    header: "Telefone",
  },
];
