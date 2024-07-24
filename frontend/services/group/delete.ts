import { api } from "../api";

type TProps = {
  id: number;
};

type TResponse = {} | null;

export async function groupDelete({ id }: TProps) {
  return api.delete<TResponse>(`/group/${id}`);
}
