import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full  border-t bg-slate-200 p-4">
      <div className="mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="outline">
            Privacy Policy
          </Button>
          <Button size="sm">Terms of Service</Button>
        </div>
      </div>
    </div>
  );
};
