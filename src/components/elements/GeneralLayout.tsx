"use client";

import { LayoutContextProvider } from "@/context/LayoutContext";
import { SessionProvider, useSession } from "next-auth/react";
import { useState } from "react";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <SessionProvider>
      <LayoutContextProvider>
        <LayoutContent>{children}</LayoutContent>
      </LayoutContextProvider>
    </SessionProvider>
  );
}

function LayoutContent({ children }: React.PropsWithChildren) {
  return (
    <div id="root" className="min-h-screen flex flex-col bg-gray-950">
      <LayoutHeader />
      <div className="px-2 bg-gray-900 flex-1 flex flex-col">{children}</div>
    </div>
  );
}

function LayoutHeader() {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  const session = useSession();
  return (
    <header className="flex flex-col items-center justify-center w-full h-8 bg-slate-800">
      <div className="flex justify-between items-center w-full h-full px-2">
        <div className="flex gap-2 items-center">
          <span>Home</span>
          <span>Admin</span>
        </div>
        <span className="text-white text-base">DoubleCReacts</span>
      </div>
    </header>
  );
}
