"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

type Props = {
  name: string;
};

export function Header({ name }: Props) {
  return (
    <div className="flex items-center justify-between px-20 py-4 bg-slate-100">
      <p>Olá, {name}</p>
      <Button variant="destructive" onClick={() => signOut()}>
        Logout
      </Button>
    </div>
  );
}
