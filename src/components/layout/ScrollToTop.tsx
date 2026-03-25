"use client";

import { useState, useEffect } from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 150);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 text-[#33cc33] transition-all duration-300 hover:scale-110 hover:text-[#2bf01d] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <BsArrowUpCircleFill size={44} />
    </button>
  );
}
