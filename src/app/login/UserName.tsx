"use client";

import { useSession } from "next-auth/react";

export default function UserName() {
  const { data: session } = useSession();

  console.log(session);

  return (
    <span className="text-white">
      {session?.user?.username}
    </span>
  );
}