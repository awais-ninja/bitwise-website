"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const Analytics = ({ id, children }) => {
  return (
    <>
      {children}
      <GoogleAnalytics gaId={id} />
      <VercelAnalytics />
      <SpeedInsights />
    </>
  );
};

export default Analytics;
