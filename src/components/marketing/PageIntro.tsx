import type { ReactNode } from "react";
import { Link } from "react-router-dom";

import Logo from "@/components/brand/logo";
import { marketingPageGutter } from "@/lib/marketing/ui";
import { cn } from "@/lib/utils";

export function PageIntro({
  eyebrow,
  title,
  accent,
  after = "",
  body,
  className,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  after?: string;
  body?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(marketingPageGutter, "mx-auto max-w-3xl pt-12 text-center sm:pt-16", className)}>
      <Link to="/" aria-label="Divine Acquisition home" className="mb-8 inline-flex">
        <Logo className="h-6 w-auto sm:h-7" />
      </Link>
      {eyebrow ? <p className="acq-headline text-[11px] font-semibold tracking-tight text-brand-300">{eyebrow}</p> : null}
      <h1 className="acq-headline mt-3 text-[1.85rem] font-semibold leading-[1.12] text-white sm:text-4xl">
        {title}
        {accent ? <em className="acq-headline-accent">{accent}</em> : null}
        {after}
      </h1>
      {body ? <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-silver">{body}</p> : null}
    </div>
  );
}
