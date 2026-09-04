import type { ReactNode } from "react";

import Backdrop from "@/components/marketing/Backdrop";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import { SiteHeader } from "@/components/marketing/SiteHeader";

export function MarketingShell({
  children,
  header = true,
}: {
  children: ReactNode;
  header?: boolean;
}) {
  return (
    <div className="relative min-h-screen bg-ink-950 text-white antialiased">
      <Backdrop />
      <div className="relative z-10">
        {header ? <SiteHeader /> : null}
        <main id="content">{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
}
