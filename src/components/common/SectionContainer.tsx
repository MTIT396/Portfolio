import React from "react";

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

export default function SectionContainer({
  children,
  className = "",
  ...props
}: SectionContainerProps) {
  return (
    <section
      className={`font-poppins py-10 relative z-40 container mx-auto px-4 lg:px-32 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
