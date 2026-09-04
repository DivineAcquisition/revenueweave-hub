import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { MarketingShell } from "@/components/marketing/MarketingShell";
import { PageIntro } from "@/components/marketing/PageIntro";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <MarketingShell>
      <PageIntro eyebrow="404" title="This page isn't " accent="here" body="The link may be old, or the page moved." />
      <div className="flex justify-center px-5 pb-20 pt-8">
        <Link to="/" className="acq-button">
          Return home
        </Link>
      </div>
    </MarketingShell>
  );
};

export default NotFound;
