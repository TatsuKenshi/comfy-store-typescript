import { useState, useEffect } from "react";

const useResize = () => {
  // filter section visibility states for small screens
  // size tracks the window width
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
  // expandForm tracks the visibility of the entire form
  const [expandForm, setExpandForm] = useState<boolean>(false);
  // states to track individual parts of the form
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showCategory, setShowCategory] = useState<boolean>(false);
  const [showCompany, setShowCompany] = useState<boolean>(false);
  const [showColor, setShowColor] = useState<boolean>(false);
  const [showPrice, setShowPrice] = useState<boolean>(false);
  const [showShipping, setShowShipping] = useState<boolean>(false);

  // useEffect adds and removes window resize event
  useEffect(() => {
    window.addEventListener("resize", () => setWindowSize(window.innerWidth));

    if (windowSize >= 1025) {
      setExpandForm(true);
      setShowSearch(true);
      setShowCategory(true);
      setShowCompany(true);
      setShowColor(true);
      setShowPrice(true);
      setShowShipping(true);
    } else {
      setExpandForm(false);
      setShowSearch(false);
      setShowCategory(false);
      setShowCompany(false);
      setShowColor(false);
      setShowPrice(false);
      setShowShipping(false);
    }

    return () =>
      window.removeEventListener("resize", () =>
        setWindowSize(window.innerWidth)
      );
  }, [windowSize]);

  return {
    windowSize,
    expandForm,
    setExpandForm,
    showSearch,
    setShowSearch,
    showCategory,
    setShowCategory,
    showCompany,
    setShowCompany,
    showColor,
    setShowColor,
    showPrice,
    setShowPrice,
    showShipping,
    setShowShipping,
  };
};

export default useResize;
