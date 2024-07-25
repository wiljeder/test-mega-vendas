import { TGroup } from "@/types/groups";
import { api } from "../api";

type TProps = {
  id: number;
};

type TResponse = Omit<TGroup, "GroupsContacts" | "Owner"> | null;

export async function groupDelete({ id }: TProps) {
  return api.delete<TResponse>(`/group/${id}`);
}
