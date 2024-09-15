module.exports = {
  siteUrl: "https://bitwise-website-pi.vercel.app",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 7000,

  changefreq: "daily",
  priority: 0.7,

  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
