import { Check } from "lucide-react";
import type { ReactNode } from "react";

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { BorderBeam } from "@/components/ui/border-beam";
import { MagicCard } from "@/components/ui/magic-card";
import { Panel } from "@/components/ui/panel";
import { ShineBorder } from "@/components/ui/shine-border";
import { CTA_LABEL } from "@/lib/marketing/copy";
import {
  marketingBody,
  marketingCardTitle,
  marketingLead,
  marketingMeasureWide,
  marketingPageGutter,
  marketingSectionTitle,
  marketingSectionY,
  marketingShell,
  sectionLabel,
} from "@/lib/marketing/ui";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function StatusPill({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/[0.08] px-3.5 py-1.5 text-[12px] font-semibold tracking-tight text-brand-200 sm:text-[13px]">
      <span className="relative flex size-1.5">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-400 opacity-70" />
        <span className="relative inline-flex size-1.5 rounded-full bg-brand-400" />
      </span>
      <AnimatedShinyText className="acq-headline mx-0 max-w-none text-[12px] font-semibold tracking-tight text-brand-200 sm:text-[13px]">
        {children}
      </AnimatedShinyText>
    </p>
  );
}

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0-5.5-5.5M19 12l-5.5 5.5" />
    </svg>
  );
}

export function BookCta({
  href = "/#calendar-section",
  className = "",
  children,
  onClick,
}: {
  href?: string;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}) {
  return (
    <a href={href} onClick={onClick} className={cn("acq-button no-underline", className)}>
      {children ?? CTA_LABEL}
      <ArrowIcon />
    </a>
  );
}

export function MarketingSection({
  id,
  headline,
  eyebrow,
  lead,
  children,
  narrow = false,
  align = "left",
  className,
}: {
  id?: string;
  headline: string;
  eyebrow?: string;
  lead?: ReactNode;
  children: ReactNode;
  narrow?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <section
      id={id}
      className={cn("hairline-glow scroll-mt-24 relative border-t border-white/[0.06]", marketingPageGutter, marketingSectionY, className)}
    >
      <div className={cn(marketingShell, narrow && marketingMeasureWide, centered && "text-center")}>
        {eyebrow ? <p className={cn(sectionLabel, "mb-3")}>{eyebrow}</p> : null}
        <h2 className={cn(marketingSectionTitle, centered && "mx-auto")}>{headline}</h2>
        {lead ? <div className={cn(marketingLead, "mt-4", centered && "mx-auto")}>{lead}</div> : null}
        <div className={cn(lead ? "mt-10" : "mt-8", centered && "text-left")}>{children}</div>
      </div>
    </section>
  );
}

export function FeatureCard({
  step,
  title,
  children,
}: {
  step?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Panel className="flex h-full flex-col overflow-hidden p-0 panel-hover">
      <MagicCard className="flex h-full flex-col rounded-2xl p-6 sm:p-7">
        {step ? (
          <p className="mb-5 text-4xl font-semibold leading-none tracking-tight text-brand-500/25 tabular-nums">{step}</p>
        ) : null}
        <h3 className={marketingCardTitle}>{title}</h3>
        <div className={cn(marketingBody, "mt-3")}>{children}</div>
      </MagicCard>
    </Panel>
  );
}

export function ProductFrame({
  title,
  caption,
  children,
  className,
}: {
  title: string;
  caption?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <figure className={cn("relative", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-8 -z-10"
        style={{
          background: "radial-gradient(ellipse at center, rgba(154,136,252,0.22) 0%, transparent 70%)",
          filter: "blur(28px)",
        }}
      />
      <div className="panel relative overflow-hidden rounded-2xl border border-white/[0.1] bg-ink-850/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_28px_90px_-32px_rgba(0,0,0,0.9)]">
        <BorderBeam size={80} duration={8} colorFrom="#9A88FC" colorTo="#C3B6FE" borderWidth={1} />
        <div className="flex items-center gap-3 border-b border-white/[0.06] px-3 py-2.5">
          <span className="flex gap-1.5" aria-hidden>
            <span className="size-2 rounded-full bg-white/25" />
            <span className="size-2 rounded-full bg-white/15" />
            <span className="size-2 rounded-full bg-white/15" />
          </span>
          <figcaption className="min-w-0 truncate text-[12px] font-medium tracking-wide text-dim">
            {title}
            {caption ? <span className="text-silver"> · {caption}</span> : null}
          </figcaption>
        </div>
        <div className="overflow-hidden">{children}</div>
      </div>
    </figure>
  );
}

export function MediaFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("relative mx-auto w-full max-w-4xl", className)}>
      <div
        aria-hidden
        className="absolute inset-x-6 -bottom-6 top-8 rounded-[2rem] opacity-70 blur-2xl"
        style={{
          background: "radial-gradient(ellipse at center, rgba(154,136,252,0.35) 0%, transparent 70%)",
        }}
      />
      <div className="panel relative overflow-hidden rounded-3xl p-1.5 sm:p-2">
        <BorderBeam size={80} duration={8} colorFrom="#9A88FC" colorTo="#C3B6FE" borderWidth={1} />
        <div className="w-full overflow-hidden rounded-[1.25rem] bg-black">{children}</div>
      </div>
    </div>
  );
}

export function IncludedCards({
  items,
}: {
  items: readonly { title: string; body: string }[];
}) {
  return (
    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.title}>
          <Panel className="h-full overflow-hidden p-0 panel-hover">
            <MagicCard className="flex h-full items-start gap-3 rounded-2xl p-4 sm:p-5">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md bg-brand-500/15 text-brand-300">
                <Check className="size-3.5" aria-hidden />
              </span>
              <div>
                <p className="acq-headline text-[15px] font-semibold leading-snug text-white">{item.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-silver">{item.body}</p>
              </div>
            </MagicCard>
          </Panel>
        </li>
      ))}
    </ul>
  );
}

export function FaqAccordion({
  items,
}: {
  items: readonly { question: string; answer: string }[];
}) {
  return (
    <Accordion type="multiple" className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
      {items.map((item, index) => (
        <AccordionItem key={item.question} value={`faq-${index}`} className="border-0">
          <AccordionTrigger className={cn(marketingCardTitle, "py-5 hover:no-underline")}>
            {item.question}
          </AccordionTrigger>
          <AccordionContent className={cn(marketingBody, "max-w-2xl pr-8")}>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function FinalCta({
  headline,
  children,
}: {
  headline: string;
  children: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-ink-900 px-6 py-12 text-center sm:px-12 sm:py-16">
      <ShineBorder shineColor={["#9A88FC", "#C3B6FE"]} duration={12} />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at top, rgba(154,136,252,0.22) 0%, transparent 55%)",
        }}
      />
      <div className="relative">
        <h2 className={cn(marketingSectionTitle, "mx-auto")}>{headline}</h2>
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
}
