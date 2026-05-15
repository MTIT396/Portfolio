"use client";
import React from "react";
import Navbar from "../common/Navbar";
import Logo from "../common/Logo";
import { BookText } from "lucide-react";
import Button from "../ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 40 ? setIsScrolled(true) : setIsScrolled(false);
    });
  }, []);
  return (
    <header
      className={`${
        isScrolled
          ? "shadow-xs shadow-primary/40 bg-bg/80 backdrop-blur-sm py-4"
          : "py-3"
      } container mx-auto lg:px-32 transition-all w-full fixed z-999 top-0 left-0 right-0 flex items-center justify-between`}
    >
      {/* Left Side */}
      <Logo />
      {/* Middle */}
      <Navbar />
      {/* Right Side */}
      <Button size="md" variant="secondary" className="rounded-full">
        <BookText size={20} />
        View CV
      </Button>
    </header>
  );
};

export default Header;
