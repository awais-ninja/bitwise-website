import { FaStar } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { FaRocket } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";

const whyUsData = [
  {
    icon: (
      <FaStar className="text-primary text-5xl mb-4 animate__animated animate__flash" />
    ),
    heading: "Exceptional Quality Assurance",
    description:
      "We guarantee top-notch quality in every project, ensuring excellence in all our services.",
  },
  {
    icon: (
      <MdSupportAgent className="text-primary text-5xl mb-4 animate__animated animate__flash" />
    ),
    heading: "24/7 Dedicated Support",
    description:
      "Our support team is available 24/7 to help with any inquiries and provide needed assistance.",
  },
  {
    icon: (
      <FaRocket className="text-primary text-5xl mb-4 animate__animated animate__flash" />
    ),
    heading: "Innovative Tech Solutions",
    description:
      "We use the latest technologies to drive success and keep your business ahead.",
  },
  {
    icon: (
      <GiProgression className="text-primary text-5xl mb-4 animate__animated animate__flash" />
    ),
    heading: "Proven Success and Results",
    description:
      "Our strategies deliver measurable results, helping your business achieve its goals effectively.",
  },
];

export default whyUsData;
