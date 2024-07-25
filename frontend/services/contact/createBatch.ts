import { TContact } from "@/types/contact";
import { api } from "../api";

type TProps = {
  contacts: {
    name: string;
    phone: string;
    groupId: number;
  }[];
};

type TResponse = Omit<TContact, "Group">[] | null;

export async function contactCreateBatch({ contacts }: TProps) {
  return api.post<TResponse>(`/contact/batch`, contacts);
}
