/** Public marketing host. Do not use the Vercel or Lovable preview URLs. */
export const SITE_HOST = "go.divineacquisition.io";
export const SITE_URL = `https://${SITE_HOST}`;
export const SITE_OG_IMAGE = `${SITE_URL}/favicon.png`;

export function canonicalUrl(pathname: string): string {
  if (!pathname || pathname === "/") return SITE_URL;
  const trimmed = pathname.replace(/\/+$/, "");
  return `${SITE_URL}${trimmed.startsWith("/") ? trimmed : `/${trimmed}`}`;
}
