import contactData from "./data/contact";
const { baseUrl } = contactData;

export default function sitemap() {
  return [
    {
      url: baseUrl,
      //   lastModified: new Date(),
      //   priority: 1,
      //   changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/about`,
      //   lastModified: new Date(),
      //   priority: 0.5,
      //   changeFrequency: "yearly",
    },
    {
      url: `${baseUrl}/services`,
      //   lastModified: new Date(),
      //   priority: 0.5,
      //   changeFrequency: "yearly",
    },
    {
      url: `${baseUrl}/blog`,
      //   lastModified: new Date(),
      //   priority: 0.5,
      //   changeFrequency: "yearly",
    },
    {
      url: `${baseUrl}/contact`,
      //   lastModified: new Date(),
      //   priority: 0.8,
      //   changeFrequency: "monthly",
    },
  ];
}
