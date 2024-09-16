import contactData from "@/app/data/contact";
const { baseUrl } = contactData;
const url = baseUrl + "/support";

export default function sitemap() {
  return [
    {
      url: url,
      //   lastModified: new Date(),
      //   priority: 1,
      //   changeFrequency: "monthly",
    },
    {
      url: `${url}/faq`,
      //   lastModified: new Date(),
      //   priority: 0.5,
      //   changeFrequency: "yearly",
    },
    {
      url: `${url}/help`,
      //   lastModified: new Date(),
      //   priority: 0.5,
      //   changeFrequency: "yearly",
    },
    {
      url: `${url}/privacy`,
      //   lastModified: new Date(),
      //   priority: 0.5,
      //   changeFrequency: "yearly",
    },
    {
      url: `${url}/terms`,
      //   lastModified: new Date(),
      //   priority: 0.5,
      //   changeFrequency: "yearly",
    },
    {
      url: `${url}/cookies`,
      //   lastModified: new Date(),
      //   priority: 0.5,
      //   changeFrequency: "yearly",
    },
  ];
}
