"use client";

import { TGroup } from "@/types/groups";

type Props = {
  groups: TGroup[] | null;
};

export function Home({ groups }: Props) {
  return (
    <div className="flex justify-between p-8">
      <pre>{JSON.stringify(groups, null, 2)}</pre>
    </div>
  );
}
