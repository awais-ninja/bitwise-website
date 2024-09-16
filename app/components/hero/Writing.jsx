"use client";

import { TypeAnimation } from "react-type-animation";

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        "Digital Marketing",
        2000,
        "Website Development",
        2000,
        "Stunning Website Design",
        2000,
        "Effective Email Marketing",
        2000,
        "Innovative SEO Strategies",
        2000,
        "Creative Graphic Design",
        2000,
        "Advanced IT Solutions",
        2000,
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
