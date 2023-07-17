import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    if (width < 1200) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return { isMobile };
};
