import { api } from "../api";

type TProps = {
  id: number;
};

type TResponse = {} | null;

export async function contactDelete({ id }: TProps) {
  return api.delete<TResponse>(`/contact/${id}`);
}
