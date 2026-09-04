import { type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { MagicCard } from "@/components/ui/magic-card";
import { Panel } from "@/components/ui/panel";
import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps {
  name: string;
  className: string;
  background: ReactNode;
  Icon: ElementType;
  description: string;
  href: string;
  cta: string;
}

export function BentoGrid({ children, className, ...props }: BentoGridProps) {
  return (
    <div className={cn("grid w-full auto-rows-[16rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3", className)} {...props}>
      {children}
    </div>
  );
}

export function BentoCard({ name, className, background, Icon, description, href, cta }: BentoCardProps) {
  return (
    <Panel className={cn("group relative flex h-full flex-col overflow-hidden p-0 panel-hover", className)}>
      <MagicCard className="flex h-full flex-col justify-between rounded-2xl">
        <div>{background}</div>
        <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6">
          <div className="flex transform-gpu flex-col gap-2 transition-all duration-300 lg:group-hover:-translate-y-8">
            <Icon aria-hidden className="size-9 origin-left text-brand-400 transition-all duration-300 group-hover:scale-75" />
            <h3 className="acq-headline text-lg font-semibold tracking-tight text-white">{name}</h3>
            <p className="max-w-lg text-sm leading-relaxed text-silver">{description}</p>
          </div>
          <a
            href={href}
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-300 transition-colors hover:text-white lg:pointer-events-none lg:absolute lg:bottom-5 lg:left-6 lg:translate-y-8 lg:opacity-0 lg:transition-all lg:duration-300 lg:group-hover:pointer-events-auto lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
          >
            {cta}
            <ArrowRight aria-hidden className="size-3.5" />
          </a>
        </div>
      </MagicCard>
    </Panel>
  );
}
