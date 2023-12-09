"use client";
import { useState, useEffect } from "react";

const useHideNav = () => {
  let [hideNav, setHideNav] = useState(false);
  let [lastScroll, setLastScroll] = useState(0);
  useEffect(() => {
    const handleNav = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScroll && scrollTop > 80) {
        setHideNav(true);
      } else {
        setHideNav(false);
      }
      setLastScroll(scrollTop);
    };

    window.addEventListener("scroll", handleNav);
    return () => {
      window.removeEventListener("scroll", handleNav);
    };
  });
  return {
    hideNav,
    lastScroll,
  };
};

export default useHideNav;
