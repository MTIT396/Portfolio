"use client";

import React, { useState, useEffect } from "react";
import { navLinks } from "@/config/nav";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  // Tracking active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // first call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActiveSection = (link: string) => activeSection === link;

  return (
    <nav className="font-poppins hidden md:flex items-center justify-center gap-10 border border-primary/20 px-8 py-2.5 backdrop-blur-sm bg-bg/80 rounded-full scroll-smooth">
      {navLinks.map((item) => (
        <button
          key={item.href}
          onClick={() => handleScrollTo(item.href)}
          className={`relative text-sm font-medium hover:-translate-y-0.5 hover:text-primary tracking-wider transition duration-500 flex items-center gap-1.5
            ${isActiveSection(item.href) ? "text-primary" : "text-white "}
          `}
        >
          <div
            className={`${isActiveSection(item.href) ? "opacity-100 scale-100" : ""} opacity-0 scale-0 rounded-full transition-all duration-300 size-1.5 bg-primary`}
          />
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
