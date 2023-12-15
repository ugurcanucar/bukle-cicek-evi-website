"use client";
import { useCallback, useEffect, useState } from "react";

const StickyNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const onScroll = useCallback((event) => {
    const { scrollY,innerHeight } = window;
    console.log(window)
    setIsSticky((prev) => scrollY > innerHeight*.8);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);
  return !isSticky ? null : (
    <div className={`sticky top-0 z-50  w-full h-20 bg-50`}></div>
  );
};

export default StickyNavbar;
