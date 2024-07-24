import { TGroup } from "@/types/groups";
import { api } from "../api";

type TProps = {
  id: number;
};

type TResponse = TGroup[] | null;

export async function groupGetByOwnerId({ id }: TProps) {
  return api.get<TResponse>(`/group/by-owner-id/${id}`);
}
