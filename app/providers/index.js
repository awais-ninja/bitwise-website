"use client";

import Analytics from "./Analytics";
import CrispProvider from "./CrispProvider";
import LenisProvider from "./LenisProvider";

const Providers = ({ children, crispSiteId }) => {
  return (
    <Analytics>
      <CrispProvider siteId={crispSiteId}>
        <LenisProvider>{children}</LenisProvider>
      </CrispProvider>
    </Analytics>
  );
};
export default Providers;
