"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

type Props = {
  name: string;
};

export function Header({ name }: Props) {
  return (
    <div className="fixed w-full flex items-center justify-between px-20 py-4 bg-slate-100 z-10">
      <p>Olá, {name}</p>
      <Button variant="destructive" onClick={() => signOut()}>
        Logout
      </Button>
    </div>
  );
}
