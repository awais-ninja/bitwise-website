import contactData from "@/app/data/contact";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "",
    },
    sitemap: `${contactData.baseUrl}/sitemap.xml`,
  };
}
