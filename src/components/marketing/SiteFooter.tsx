import { Link } from "react-router-dom";

import Logo from "@/components/brand/logo";
import { FACEBOOK_DISCLAIMER } from "@/lib/marketing/copy";
import { marketingPageGutter, marketingShell } from "@/lib/marketing/ui";
import { cn } from "@/lib/utils";

const footerLinkClass = "text-sm text-silver transition-colors hover:text-brand-300";

export function SiteFooter() {
  return (
    <footer className="hairline-glow relative border-t border-white/[0.06]">
      <div className={cn(marketingShell, marketingPageGutter, "py-10 sm:py-12")}>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" aria-label="Divine Acquisition home" className="inline-block">
              <Logo className="h-6 w-auto" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-dim">
              Missed-call booking, quote follow-up, and recurring conversion for remote residential cleaning companies.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-dim">System</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="/#product" className={footerLinkClass}>
                  Systems
                </a>
              </li>
              <li>
                <a href="/#results" className={footerLinkClass}>
                  Results
                </a>
              </li>
              <li>
                <a href="/#calendar-section" className={footerLinkClass}>
                  Book a session
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-dim">Company</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="mailto:hello@divineacquisition.io" className={footerLinkClass}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-dim">Legal</p>
            <p className="mt-4 text-sm leading-relaxed text-dim">© {new Date().getFullYear()} Divine Acquisition. All rights reserved.</p>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-3xl border-t border-white/[0.05] pt-6 text-center text-[10px] leading-relaxed text-neutral-600 sm:text-[11px]">
          {FACEBOOK_DISCLAIMER}
        </p>
      </div>
    </footer>
  );
}

export default SiteFooter;
