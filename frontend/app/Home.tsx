"use client";

import { signOut } from "next-auth/react";

export function Home() {
  return (
    <div className="flex justify-between">
      <p>home</p>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
}
