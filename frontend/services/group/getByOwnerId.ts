import { api } from "../api";

type TProps = {
  id: number;
};

type TResponse = {} | null;

export async function groupGetByOwnerId({ id }: TProps) {
  return api.get<TResponse>(`/group/by-owner-id/${id}`);
}
