import { TContact } from "@/types/contact";
import { api } from "../api";

type TProps = {
  name: string;
  phone: string;
  groupId: number;
};

type TResponse = Omit<TContact, "Group"> | null;

export async function contactCreate({ name, phone, groupId }: TProps) {
  return api.post<TResponse>(`/contact`, {
    name,
    phone,
    groupId,
  });
}
