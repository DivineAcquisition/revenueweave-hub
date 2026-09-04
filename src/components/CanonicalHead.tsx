import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

import { SITE_OG_IMAGE, canonicalUrl } from "@/lib/site";

export function CanonicalHead() {
  const { pathname } = useLocation();
  const url = canonicalUrl(pathname);

  return (
    <Helmet>
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={SITE_OG_IMAGE} />
      <meta name="twitter:image" content={SITE_OG_IMAGE} />
    </Helmet>
  );
}
