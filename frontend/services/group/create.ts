import { TGroup } from "@/types/groups";
import { api } from "../api";

type TProps = {
  name: string;
  ownerId: number;
};

type TResponse = Omit<TGroup, "GroupsContacts" | "Owner"> | null;

export async function groupCreate({ name, ownerId }: TProps) {
  return api.post<TResponse>(`/group`, {
    name,
    ownerId,
  });
}
