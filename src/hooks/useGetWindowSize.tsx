import { useEffect, useState } from "react";

type ScreenSize = {
  windowWidth: number;
  windowHeight: number;
};

const useGetWindowSize = () => {
  const [screenSize, setScreenSize] = useState<ScreenSize>(
    getCurrentDimension()
  );

  function getCurrentDimension() {
    return {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return screenSize;
};

export default useGetWindowSize;
