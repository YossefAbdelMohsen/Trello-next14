import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full px-4 border-b shadow-sm bg-white flex items-center h-14">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/sign-up">Get Trello Free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
