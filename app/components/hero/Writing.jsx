"use client";

import { TypeAnimation } from "react-type-animation";

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        "eCommerce Store",
        1500,
        "eCommerce Website",
        1500,
        "Web Development",
        1500,
        "Website Design",
        1500,
        "Digital Marketing",
        1500,
        "Email Marketing",
        1500,
        "SEO Strategies",
        1500,
        "Graphic Design",
        1500,
        "IT Solutions",
        1500,
        "Shopify",
        1500,
        "Wix",
        1500,
        "WordPress",
        1500,
        "WoCommerce",
        1500,
        "BigCommerce ",
        1500,
      ]}
      wrapper="strong"
      speed={60}
      style={{
        fontSize: "inherit",
        color: "#8b12fcff",
        display: "inline-block",
      }}
      repeat={Infinity}
    />
  );
};

export default ExampleComponent;
