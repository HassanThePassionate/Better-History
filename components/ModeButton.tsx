"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
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
