"use client";

import { Twitch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function ButtonTwitchLogin() {
  return (
    <Button
      type="button"
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#6441A4] hover:bg-[#7D5BBE] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6441A4]"
      onClick={() => {
        signIn();
      }}
    >
      <Twitch className="mr-2 h-5 w-5" />
      Login with Twitch
    </Button>
  );
}
