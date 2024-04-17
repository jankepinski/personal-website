"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export const DarkLightToggle = () => {
  const [dark, setDark] = useState(false);
  return (
    <Button
      onClick={() => {
        document.getElementsByTagName("html")[0].classList.toggle("dark");
        setDark(!dark);
      }}
      className="h-8 w-8 p-0"
    >
      {dark ? <Moon /> : <Sun />}
    </Button>
  );
};
