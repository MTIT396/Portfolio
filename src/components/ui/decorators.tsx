"use client";

import { motion } from "framer-motion";

export default function Decorators() {
  return (
    <>
      {/* Grid Overlay */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[18px_24px]" />

      <div className="pointer-events-none fixed inset-0 z-99 overflow-hidden">
        {/* Top Left */}
        <motion.div className="absolute top-10 left-10 size-72 bg-[#3b1f60] opacity-40 blur-[100px]" />

        {/* Top Right */}
        <motion.div className="absolute top-10 right-10 size-72 bg-cyan-500 opacity-30 blur-[120px]" />

        {/* Bottom Left */}
        <motion.div className="absolute bottom-10 left-10 size-72 bg-cyan-500 opacity-30 blur-[150px]" />

        {/* Bottom Right */}
        <motion.div className="absolute bottom-10 right-10 size-72 bg-[#3b1f60] opacity-40 blur-[100px]" />
      </div>
    </>
  );
}
