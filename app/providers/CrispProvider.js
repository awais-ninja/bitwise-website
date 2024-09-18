"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

const CrispProvider = ({ children, siteId }) => {
  useEffect(() => {
    Crisp.configure(siteId);
  }, [siteId]);

  return <>{children}</>;
};

export default CrispProvider;
