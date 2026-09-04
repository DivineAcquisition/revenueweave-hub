import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Coss / DA panel surface. Cards, lists, and marketing chrome share this
 * 1px gradient edge on ink-900 rather than a flat border.
 */
export function Panel({
  children,
  className = "",
  as: Component = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return <Component className={cn("panel rounded-2xl", className)}>{children}</Component>;
}
