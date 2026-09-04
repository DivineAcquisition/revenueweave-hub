type Fbq = (...args: unknown[]) => void;

export function trackPixel(event: string, payload?: Record<string, unknown>) {
  const fbq = (window as Window & { fbq?: Fbq }).fbq;
  if (typeof fbq !== "function") return;
  fbq("track", event, payload);
}

export function trackCustomPixel(event: string, payload?: Record<string, unknown>) {
  const fbq = (window as Window & { fbq?: Fbq }).fbq;
  if (typeof fbq !== "function") return;
  fbq("trackCustom", event, payload);
}
