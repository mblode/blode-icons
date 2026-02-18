"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";
import CircleCheckIcon from "@/src/icons-tsx/circle-check";
import CircleXFilledIcon from "@/src/icons-tsx/circle-x-filled";
import InfoIcon from "@/src/icons-tsx/info";
import LoaderIcon from "@/src/icons-tsx/loader";
import WarningSignIcon from "@/src/icons-tsx/warning-sign";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <WarningSignIcon className="size-4" />,
        error: <CircleXFilledIcon className="size-4" />,
        loading: <LoaderIcon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      theme={theme as ToasterProps["theme"]}
      {...props}
    />
  );
};

export { Toaster };
