import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

import Logo from "@/components/brand/logo";
import { BookCta } from "@/components/marketing/primitives";
import { NAV } from "@/lib/marketing/copy";
import { marketingNavLink, marketingPageGutter, marketingShell } from "@/lib/marketing/ui";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-ink-950/75 backdrop-blur-xl">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/45 to-transparent"
      />
      <div className={cn(marketingShell, marketingPageGutter, "flex h-16 items-center justify-between gap-4")}>
        <div className="flex min-w-0 items-center gap-8">
          <Link to="/" aria-label="Divine Acquisition home" className="shrink-0 rounded-sm transition-opacity hover:opacity-80">
            <Logo className="h-5 w-auto sm:h-[22px]" />
          </Link>
          <nav aria-label="Page" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {NAV.sections.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={marketingNavLink}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <BookCta className="hidden !min-h-10 !px-4 !py-2 !text-[13px] sm:inline-flex" />
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <Menu className="size-4" aria-hidden />
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/[0.06] bg-ink-950 px-5 py-4 md:hidden">
          <nav aria-label="Page" className="flex flex-col gap-1">
            {NAV.sections.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-xl px-3 text-base font-medium text-silver hover:bg-white/[0.04] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4">
            <BookCta className="acq-button-full" onClick={() => setOpen(false)} />
          </div>
        </div>
      ) : null}
    </header>
  );
}
