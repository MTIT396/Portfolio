import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "thirdary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  disabled,
  ...props
}) => {
  const baseStyles =
    "flex items-center justify-center text-nowrap group relative overflow-hidden rounded-md font-medium transition-all duration-300 ease-out";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-8 py-2.5 text-lg",
  }[size];

  const variantStyles = {
    primary:
      "bg-primary/20 border border-primary text-white drop-shadow-(--shadow-primary)",

    secondary:
      "bg-linear-to-r from-[#6965fb] to-[#9f56f5] border border-primary text-white hover:bg-linear-to-l drop-shadow-(--shadow-primary)",

    thirdary: "bg-white/5 font-medium text-white hover:bg-white/10",

    outline: "border border-primary text-primary hover:bg-primary/20",
  }[variant];

  const disabledStyles =
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-current";

  return (
    <button
      disabled={disabled}
      className={cn(
        baseStyles,
        sizeStyles,
        variantStyles,
        disabledStyles,
        className,
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>

      {/* Primary Hover Effect */}
      {variant === "primary" && !disabled && (
        <span
          className="
            absolute inset-0 bg-primary backdrop-blur-md
            -translate-x-full group-hover:translate-x-0
            transition-transform duration-500 ease-out
          "
        />
      )}
    </button>
  );
};

export default Button;
