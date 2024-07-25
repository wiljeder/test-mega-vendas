"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { DEFAULT_AUTHORIZED } from "@/lib/routes";

type Props = {
  name: string;
};

export function Header({ name }: Props) {
  return (
    <div className="fixed w-full flex items-center justify-between md:px-8 px-4 py-4 bg-slate-100 z-10">
      <Link href={DEFAULT_AUTHORIZED}>
        <Image src="/super-mega-vendas.png" alt="logo" width={72} height={56} />
      </Link>

      <div className="flex gap-x-8 items-center">
        <p>Olá, {name}</p>
        <Button variant="destructive" onClick={() => signOut()}>
          Sair
        </Button>
      </div>
    </div>
  );
}
