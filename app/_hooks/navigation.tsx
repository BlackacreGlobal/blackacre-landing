import { useEffect, useState } from "react";

export const useElementHeight = (idName: string) => {
  // let element = document.getElementById(idName);
  const [elementHeight, setElementHeight] = useState(getHeight());

  function getHeight() {
    const element = document.getElementById(idName);
    return element ? element.getBoundingClientRect().height : 0;
  }

  useEffect(() => {
    const element = document.getElementById(idName);
    console.log("height", element, getHeight());
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
