"use client";

import Analytics from "./Analytics";
import CrispProvider from "./CrispProvider";
import LenisProvider from "./LenisProvider";

const Providers = ({ children, crispSiteId, gId }) => {
  return (
    <Analytics id={gId}>
      <CrispProvider siteId={crispSiteId}>
        <LenisProvider>{children}</LenisProvider>
      </CrispProvider>
    </Analytics>
  );
};
export default Providers;
