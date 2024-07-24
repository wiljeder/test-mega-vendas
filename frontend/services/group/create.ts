import { api } from "../api";

type TProps = {
  name: string;
  ownerId: number;
};

type TResponse = {} | null;

export async function groupCreate({ name, ownerId }: TProps) {
  return api.post<TResponse>(`/group`, {
    name,
    ownerId,
  });
}
