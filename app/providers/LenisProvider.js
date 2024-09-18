import Lenis from "lenis";
import { useEffect } from "react";

const LenisProvider = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return <>{children}</>;
};
export default LenisProvider;
