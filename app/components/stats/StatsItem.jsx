"use client";

import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const StatItem = ({ label, value, duration = 10 }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(value);
      const incrementTime = (duration / end) * 10;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [value, duration, inView]);

  return (
    <div ref={ref} className="text-center mb-4">
      <div className="text-4xl font-bold text-primary">{count} +</div>
      <div className="font-semibold text-primary">{label}</div>
    </div>
  );
};

export default StatItem;
