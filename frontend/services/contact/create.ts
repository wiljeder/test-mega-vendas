import { api } from "../api";

type TProps = {
  name: string;
  phone: string;
  groupId: number;
};

type TResponse = {} | null;

export async function contactCreate({ name, phone, groupId }: TProps) {
  return api.post<TResponse>(`/contact`, {
    name,
    phone,
    groupId,
  });
}
