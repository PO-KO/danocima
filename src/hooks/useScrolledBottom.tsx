import { useEffect, useState } from "react";

const useScrolledBottom = () => {
  const [isBottom, setIsBottom] = useState(false);

  const handleScroll = () => {
    const scrollableHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    if (window.scrollY >= scrollableHeight) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return isBottom;
};

export default useScrolledBottom;
