import { api } from "../api";

type TProps = {
  id: number;
  name: string;
};

type TResponse = {
  name: string;
} | null;

export async function groupRename({ id, name }: TProps) {
  return api.put<TResponse>(`/group/${id}`, {
    name,
  });
}
