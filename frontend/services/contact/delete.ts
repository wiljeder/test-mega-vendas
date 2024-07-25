import { TContact } from "@/types/contact";
import { api } from "../api";

type TProps = {
  id: number;
};

type TResponse = Omit<TContact, "Group"> | null;

export async function contactDelete({ id }: TProps) {
  return api.delete<TResponse>(`/contact/${id}`);
}
