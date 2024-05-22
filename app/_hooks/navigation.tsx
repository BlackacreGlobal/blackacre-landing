"use client";

import { useEffect, useState } from "react";

export const useElementHeight = (idName: string) => {
  const [elementHeight, setElementHeight] = useState(0);

  useEffect(() => {
    const element = document.getElementById(idName);
    const getHeight = () => {
      return element ? element.getBoundingClientRect().height : 0;
    };
    // const element = document.getElementById(idName);
    const handleResize = () => {
      if (element) {
        setElementHeight(getHeight());
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return elementHeight;
};
