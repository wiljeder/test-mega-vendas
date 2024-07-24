import { api } from "../api";

type TProps = {
  contacts: {
    name: string;
    phone: string;
    groupId: number;
  }[];
};

type TResponse = {} | null;

export async function contactCreateBatch({ contacts }: TProps) {
  return api.post<TResponse>(`/contact/batch`, contacts);
}
