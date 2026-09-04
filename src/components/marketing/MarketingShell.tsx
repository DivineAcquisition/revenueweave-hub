import type { ReactNode } from "react";

import Backdrop from "@/components/marketing/Backdrop";
import { SiteFooter } from "@/components/marketing/SiteFooter";

export function MarketingShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-ink-950 text-white antialiased">
      <Backdrop />
      <div className="relative z-10">
        <main id="content">{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
}
