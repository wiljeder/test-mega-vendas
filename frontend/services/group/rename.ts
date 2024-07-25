import { TGroup } from "@/types/groups";
import { api } from "../api";

type TProps = {
  id: number;
  name: string;
};

type TResponse = Omit<TGroup, "GroupsContacts" | "Owner"> | null;

export async function groupRename({ id, name }: TProps) {
  return api.put<TResponse>(`/group/${id}`, {
    name,
  });
}
