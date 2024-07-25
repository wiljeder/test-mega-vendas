"use server";

import { contactCreateBatch } from "@/services/contact/createBatch";
import { groupCreate } from "@/services/group/create";
import { redirect } from "next/navigation";

type Props = {
  name: string;
  ownerId: number;
  contacts: {
    name: string;
    phone: string;
  }[];
};

export async function createGroupWithContacts({
  name,
  ownerId,
  contacts,
}: Props) {
  const { data: group } = await groupCreate({ name, ownerId });

  await contactCreateBatch({
    contacts: contacts.map((c) => ({ ...c, groupId: group?.id as number })),
  });

  return redirect(`/group/${group?.id}`);
}
