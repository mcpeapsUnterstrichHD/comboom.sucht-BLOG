"use client";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { theme, systemTheme, setTheme } = useTheme(); // Get the current theme

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="rounded-full bg-transparent backdrop-blur-sm flex items-center"
          variant="outline"
          size="icon"
        >
          <SunIcon className="dark:-rotate-90 h-[1.2rem] w-[1.2rem] rotate-0 transition-all sm:scale-90 md:scale-100 lg:scale-100 xl:scale-100 2xl:scale-100 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="bg-transparent backdrop-blur-sm"
        align="end"
      >
        {theme === "system" && systemTheme === "light" && (
          <DropdownMenuItem onClick={() => setTheme("dark")} className="hover:underline hover:font-bold">
            Dark
          </DropdownMenuItem>
        )}
        {theme === "system" && systemTheme === "dark" && (
          <DropdownMenuItem onClick={() => setTheme("light")} className="hover:underline hover:font-bold">
            Light
          </DropdownMenuItem>
        )}
        {theme === "dark" && (
          <>
            <DropdownMenuItem onClick={() => setTheme("system")} className="hover:underline hover:font-bold">
              System
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("light")} className="hover:underline hover:font-bold">
              Light
            </DropdownMenuItem>
          </>
        )}
        {theme === "light" && (
          <>
            <DropdownMenuItem onClick={() => setTheme("system")} className="hover:underline hover:font-bold">
              System
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")} className="hover:underline hover:font-bold">
              Dark
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}