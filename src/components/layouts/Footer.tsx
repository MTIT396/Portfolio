"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="container mx-auto lg:px-32 mt-20">
      <div className="py-8 flex items-center justify-center gap-4">
        {/* Logo + text */}
        <p className="text-sm text-gray-400 font-inter">
          © {new Date().getFullYear()} MinhThien™. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
