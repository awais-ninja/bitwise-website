import {
  FaCode,
  FaBriefcase,
  FaBalanceScale,
  FaEnvelope,
  FaDesktop,
  FaChartLine,
  FaCloud,
  FaUsers,
} from "react-icons/fa";
import { IoMegaphone } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";

const ServicesData = [
  {
    key: "key-1",
    icon: <FaCode size={60} />,
    title: "Custom Website Solutions",
    description:
      "Launch your startup with a tailor-made website that stands out and supports your business goals.",
    link: "/startup/website",
    cta: "Read More ->",
  },
  {
    key: "key-2",
    icon: <FaBriefcase size={60} />,
    title: "Startup Growth Consulting",
    description:
      "Get personalized strategies and insights to navigate the challenges of starting and growing your small business.",
    link: "/startup/consultant",
    cta: "Read More ->",
  },
  {
    key: "key-3",
    icon: <FaBalanceScale size={60} />,
    title: "Legal & IP Protection",
    description:
      "Safeguard your startup’s innovations and navigate legal hurdles with expert advice on intellectual property and compliance.",
    link: "/startup/protection",
    cta: "Read More ->",
  },
  {
    key: "key-4",
    icon: <IoMegaphone size={60} />,
    title: "Branding & Market Visibility",
    description:
      "Build a compelling brand and reach your target audience with effective marketing strategies tailored for startups.",
    link: "/startup/branding",
    cta: "Read More ->",
  },
  {
    key: "key-5",
    icon: <FaEnvelope size={60} />,
    title: "Email Campaign Management",
    description:
      "Drive engagement and growth with strategic email marketing campaigns designed to convert leads into loyal customers.",
    link: "/startup/marketing",
    cta: "Read More ->",
  },
  {
    key: "key-6",
    icon: <FaDesktop size={60} />,
    title: "Tech Support & Solutions",
    description:
      "Keep your startup’s tech infrastructure running smoothly with reliable IT support and solutions tailored for small businesses.",
    link: "/startup/tech",
    cta: "Read More ->",
  },
  {
    key: "key-7",
    icon: <FaChartLine size={60} />,
    title: "SEO & Analytics Insights",
    description:
      "Boost your online presence and track your progress with our SEO services and performance analytics designed for startups.",
    link: "/startup/seo",
    cta: "Read More ->",
  },
  {
    key: "key-8",
    icon: <FaCloud size={60} />,
    title: "Scalable Cloud Services",
    description:
      "Adapt and grow efficiently with cloud solutions that scale with your startup’s needs and ensure secure operations.",
    link: "/startup/cloud",
    cta: "Read More ->",
  },
  {
    key: "key-9",
    icon: <FaUsers size={60} />,
    title: "Enhanced Customer Support",
    description:
      "Improve customer satisfaction with robust support systems and tools designed to enhance service quality for your growing business.",
    link: "/startup/customer",
    cta: "Read More ->",
  },
  {
    key: "key-10",
    icon: <RiCustomerService2Fill size={60} />,
    title: "Social Media Strategy",
    description:
      "Expand your reach and engage effectively on social media platforms with customized strategies for startups and small businesses.",
    link: "/startup/social",
    cta: "Read More ->",
  },
];

export default ServicesData;
