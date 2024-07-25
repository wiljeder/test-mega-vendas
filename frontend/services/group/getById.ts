import { TGroup } from "@/types/groups";
import { api } from "../api";

type TProps = {
  id: number;
};

type TResponse = TGroup | null;

export async function groupGetById({ id }: TProps) {
  try {
    return api.get<TResponse>(`/group/by-id/${id}`);
  } catch (err) {
    return { data: null };
  }
}
