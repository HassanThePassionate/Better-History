"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const [toggle, setToggle] = React.useState(true);
  const { setTheme } = useTheme();
  const switches = () => {
    setToggle(!toggle);
  };
  if (toggle) {
    setTheme("light");
  } else {
    setTheme("dark");
  }
  return (
    <div>
      <Switch onClick={switches} />
    </div>
  );
}
