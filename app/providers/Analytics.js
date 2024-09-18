"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const Analytics = ({ children }) => {
  return (
    <>
      {children}
      <GoogleAnalytics gaId={"G-VQ31N0WZS4"} />
      <VercelAnalytics />
      <SpeedInsights />
    </>
  );
};

export default Analytics;
