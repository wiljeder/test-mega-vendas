import { api } from "../api";

type TProps = {
  id: number;
};

type TResponse = {} | null;

export async function groupGetById({ id }: TProps) {
  return api.get<TResponse>(`/group/by-id/${id}`);
}
