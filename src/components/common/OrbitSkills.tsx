"use client";
import React, { useEffect, useState, memo } from "react";

// --- Type Definitions ---
type IconType =
  | "html"
  | "css"
  | "javascript"
  | "react"
  | "node"
  | "tailwind"
  | "typescript"
  | "nextjs"
  | "mysql";

type GlowColor = "cyan" | "purple";

interface SkillIconProps {
  type: IconType;
}

interface SkillConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  iconType: IconType;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
}

interface OrbitingSkillProps {
  config: SkillConfig;
  angle: number;
}

interface GlowingOrbitPathProps {
  radius: number;
  glowColor?: GlowColor;
  animationDelay?: number;
}

// --- Improved SVG Icon Components ---
const iconComponents: Record<
  IconType,
  { component: () => React.JSX.Element; color: string }
> = {
  html: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path
          d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
          fill="#E34F26"
        />
      </svg>
    ),
    color: "#E34F26",
  },
  css: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path
          d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.751L12 19.351l5.379-1.443.744-8.157z"
          fill="#1572B6"
        />
      </svg>
    ),
    color: "#1572B6",
  },
  javascript: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <rect width="24" height="24" fill="#F7DF1E" />
        <path
          d="M22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
          fill="#323330"
        />
      </svg>
    ),
    color: "#F7DF1E",
  },
  react: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <circle cx="12" cy="12" r="2.05" fill="#61DAFB" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" />
          <ellipse
            cx="12"
            cy="12"
            rx="11"
            ry="4.2"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="11"
            ry="4.2"
            transform="rotate(120 12 12)"
          />
        </g>
      </svg>
    ),
    color: "#61DAFB",
  },
  node: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path
          d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.602.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.135-.141.135-.241V6.921c0-.103-.055-.198-.137-.246l-8.791-5.072c-.081-.047-.189-.047-.273 0L2.075 6.675c-.084.048-.139.144-.139.246v10.146c0 .1.055.194.139.241l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L1.352 18.675C.533 18.215 0 17.352 0 16.43V6.284c0-.922.533-1.786 1.352-2.245L10.147-.963c.8-.452 1.866-.452 2.657 0l8.796 5.002c.819.459 1.352 1.323 1.352 2.245v10.146c0 .922-.533 1.783-1.352 2.245l-8.796 5.078c-.28.163-.601.247-.926.247zm2.717-6.993c-3.849 0-4.654-1.766-4.654-3.246 0-.14.114-.253.256-.253h1.136c.127 0 .232.091.252.215.173 1.164.686 1.752 3.01 1.752 1.852 0 2.639-.419 2.639-1.401 0-.566-.224-1.03-3.099-1.249-2.404-.184-3.89-.768-3.89-2.689 0-1.771 1.491-2.825 3.991-2.825 2.808 0 4.199.975 4.377 3.068.007.072-.019.141-.065.193-.047.049-.111.077-.178.077h-1.14c-.119 0-.225-.083-.248-.196-.276-1.224-.944-1.616-2.746-1.616-2.023 0-2.259.705-2.259 1.234 0 .641.278.827 3.006 1.19 2.7.359 3.982.866 3.982 2.771 0 1.922-1.603 3.024-4.399 3.024z"
          fill="#339933"
        />
      </svg>
    ),
    color: "#339933",
  },
  tailwind: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path
          d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
          fill="#06B6D4"
        />
      </svg>
    ),
    color: "#06B6D4",
  },
  typescript: {
    component: () => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
        <path fill="#017ACB" d="M0 0h100v100H0z" />
        <path
          fill="#fff"
          d="M48.016 37.031h4.797v8.282h-12.97v36.843l-.343.094c-.469.125-6.64.125-7.969-.016l-1.062-.093V45.312H17.5v-8.28l4.11-.048c2.25-.03 8.03-.03 12.843 0 4.813.032 10.906.047 13.563.047m36.61 41.219c-1.907 2.016-3.954 3.14-7.36 4.063-1.485.406-1.735.421-5.078.406-3.344-.016-3.61-.016-5.235-.438-4.203-1.078-7.594-3.187-9.906-6.172-.656-.843-1.734-2.593-1.734-2.812 0-.063.156-.203.359-.297s.625-.36.969-.562c.343-.204.968-.579 1.39-.797.422-.22 1.64-.938 2.703-1.579 1.063-.64 2.032-1.156 2.141-1.156.11 0 .313.219.469.485.937 1.578 3.125 3.593 4.672 4.28.953.407 3.062.86 4.078.86.937 0 2.656-.406 3.578-.828.984-.453 1.484-.906 2.078-1.812.406-.641.453-.813.438-2.032 0-1.125-.063-1.437-.375-1.953-.875-1.437-2.063-2.187-6.875-4.312-4.97-2.203-7.204-3.516-9.016-5.282-1.344-1.312-1.61-1.67-2.453-3.312-1.094-2.11-1.235-2.797-1.25-5.937-.016-2.204.031-2.922.265-3.672.329-1.125 1.391-3.297 1.875-3.844 1-1.172 1.36-1.531 2.063-2.11 2.125-1.75 5.438-2.906 8.61-3.015.359 0 1.546.062 2.656.14 3.187.266 5.359 1.047 7.453 2.72 1.578 1.25 3.968 4.187 3.734 4.577-.156.235-6.39 4.391-6.797 4.516-.25.078-.422-.016-.765-.422-2.125-2.547-2.985-3.094-5.047-3.219-1.469-.093-2.25.078-3.235.735-1.03.687-1.53 1.734-1.53 3.187.015 2.125.827 3.125 3.827 4.61 1.938.953 3.594 1.734 3.719 1.734.188 0 4.203 2 5.25 2.625 4.875 2.86 6.86 5.797 7.375 10.86.375 3.812-.703 7.296-3.047 9.765"
        />
      </svg>
    ),
    color: "#06B6D4",
  },
  nextjs: {
    component: () => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
        <path
          fill="#000"
          d="M50 99.999c27.614 0 50-22.386 50-50s-22.386-50-50-50-50 22.386-50 50 22.386 50 50 50"
        />
        <path
          fill="url(#a)"
          d="M83.06 87.51 38.412 30H30v39.983h6.73V38.545L77.777 91.58a50 50 0 0 0 5.283-4.07"
        />
        <path fill="url(#b)" d="M70.556 29.999h-6.667v40h6.667z" />
        <defs>
          <linearGradient
            id="a"
            x1="60.556"
            x2="80.278"
            y1="64.721"
            y2="89.166"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="b"
            x1="67.222"
            x2="67.111"
            y1="29.999"
            y2="59.374"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
    color: "#06B6D4",
  },
  mysql: {
    component: () => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
        <path
          fill="#00546B"
          d="M92.11 77.066c-5.44-.137-9.657.415-13.194 1.934-1.02.413-2.653.414-2.789 1.726.544.552.612 1.45 1.089 2.209.817 1.38 2.244 3.245 3.536 4.212 1.428 1.104 2.857 2.208 4.353 3.175 2.652 1.657 5.645 2.623 8.23 4.28 1.497.966 2.992 2.21 4.488 3.245.749.552 1.224 1.45 2.177 1.795v-.207c-.477-.622-.613-1.519-1.088-2.21-.68-.69-1.36-1.311-2.04-2.002-1.973-2.692-4.421-5.04-7.074-6.972-2.176-1.52-6.938-3.59-7.821-6.145 0 0-.069-.068-.136-.137 1.496-.138 3.264-.69 4.693-1.105 2.312-.622 4.42-.484 6.8-1.105 1.089-.276 2.177-.621 3.265-.967v-.62c-1.224-1.243-2.108-2.9-3.4-4.074-3.469-3.038-7.278-6.007-11.222-8.492-2.11-1.38-4.83-2.278-7.074-3.452-.816-.414-2.176-.621-2.652-1.312-1.225-1.518-1.905-3.52-2.789-5.315-1.972-3.798-3.877-8.009-5.577-12.013-1.224-2.692-1.972-5.385-3.469-7.87-7.005-11.737-14.622-18.848-26.32-25.82-2.517-1.45-5.51-2.072-8.706-2.83-1.7-.07-3.4-.208-5.1-.278-1.09-.483-2.178-1.794-3.13-2.416C13.284 1.815 3.286-3.57.43 3.541c-1.837 4.487 2.72 8.906 4.284 11.184 1.157 1.588 2.652 3.383 3.469 5.178.476 1.173.611 2.417 1.088 3.66 1.088 3.036 2.108 6.42 3.537 9.25.748 1.45 1.564 2.969 2.516 4.28.544.76 1.496 1.105 1.7 2.348-.951 1.38-1.02 3.452-1.564 5.178-2.449 7.801-1.496 17.466 1.972 23.196 1.088 1.726 3.673 5.524 7.142 4.074 3.06-1.243 2.38-5.178 3.264-8.63.205-.83.069-1.38.476-1.933v.138c.953 1.933 1.904 3.797 2.789 5.73 2.108 3.383 5.78 6.904 8.841 9.252 1.633 1.242 2.925 3.382 4.966 4.142v-.208h-.137c-.408-.621-1.02-.897-1.564-1.38-1.224-1.243-2.585-2.762-3.536-4.143-2.857-3.866-5.374-8.146-7.618-12.565-1.088-2.14-2.04-4.487-2.924-6.627-.409-.83-.409-2.072-1.089-2.485-1.02 1.518-2.516 2.83-3.264 4.694-1.292 2.968-1.428 6.627-1.904 10.424-.273.07-.137 0-.273.14-2.176-.554-2.924-2.832-3.74-4.765-2.041-4.901-2.381-12.772-.613-18.433.477-1.45 2.517-6.006 1.701-7.387-.408-1.312-1.769-2.071-2.517-3.107-.884-1.312-1.836-2.968-2.448-4.418-1.633-3.866-2.449-8.147-4.217-12.013-.816-1.795-2.244-3.659-3.4-5.316-1.293-1.864-2.721-3.176-3.741-5.385-.34-.759-.817-2.002-.272-2.83.136-.553.407-.76.952-.898.884-.76 3.4.207 4.284.621 2.517 1.035 4.625 2.003 6.734 3.452.952.69 1.972 2.003 3.196 2.348h1.429c2.176.483 4.624.138 6.665.759 3.605 1.173 6.87 2.9 9.794 4.764 8.91 5.73 16.255 13.876 21.22 23.61.816 1.588 1.156 3.039 1.904 4.695 1.429 3.383 3.197 6.835 4.625 10.149 1.428 3.244 2.788 6.559 4.829 9.251 1.02 1.45 5.1 2.21 6.937 2.969 1.36.62 3.47 1.174 4.693 1.933 2.312 1.449 4.625 3.107 6.801 4.694 1.089.829 4.489 2.555 4.693 3.935"
        />
        <path
          fill="#00546B"
          d="M22.737 17.072c-1.156 0-1.972.139-2.788.345v.138h.136c.544 1.105 1.496 1.865 2.176 2.831.544 1.104 1.02 2.21 1.565 3.314.067-.07.135-.138.135-.138.953-.69 1.429-1.795 1.429-3.452-.409-.483-.477-.966-.817-1.45-.407-.69-1.292-1.035-1.836-1.588"
        />
      </svg>
    ),
    color: "#06B6D4",
  },
};

// --- Memoized Icon Component ---
const SkillIcon = memo(({ type }: SkillIconProps) => {
  const IconComponent = iconComponents[type]?.component;
  return IconComponent ? <IconComponent /> : null;
});
SkillIcon.displayName = "SkillIcon";

// --- Configuration for the Orbiting Skills ---
const skillsConfig: SkillConfig[] = [
  // Inner Orbit
  {
    id: "html",
    orbitRadius: 100,
    size: 40,
    speed: 1,
    iconType: "html",
    phaseShift: 0,
    glowColor: "cyan",
    label: "HTML5",
  },
  {
    id: "css",
    orbitRadius: 100,
    size: 45,
    speed: 1,
    iconType: "css",
    phaseShift: (2 * Math.PI) / 3,
    glowColor: "cyan",
    label: "CSS3",
  },
  {
    id: "javascript",
    orbitRadius: 100,
    size: 40,
    speed: 1,
    iconType: "javascript",
    phaseShift: (4 * Math.PI) / 3,
    glowColor: "cyan",
    label: "JavaScript",
  },
  // Outer Orbit
  {
    id: "react",
    orbitRadius: 180,
    size: 65,
    speed: -0.6,
    iconType: "react",
    phaseShift: 0,
    glowColor: "purple",
    label: "React",
  },
  {
    id: "node",
    orbitRadius: 180,
    size: 55,
    speed: -0.6,
    iconType: "node",
    phaseShift: (2 * Math.PI) / 3,
    glowColor: "purple",
    label: "Node.js",
  },
  {
    id: "tailwind",
    orbitRadius: 180,
    size: 45,
    speed: -0.6,
    iconType: "tailwind",
    phaseShift: (4 * Math.PI) / 3,
    glowColor: "purple",
    label: "Tailwind CSS",
  },
  {
    id: "typescript",
    orbitRadius: 180,
    size: 60,
    speed: -0.6,
    iconType: "typescript",
    phaseShift: (1 * Math.PI) / 3,
    glowColor: "purple",
    label: "Typescript",
  },
  {
    id: "next",
    orbitRadius: 180,
    size: 50,
    speed: -0.6,
    iconType: "nextjs",
    phaseShift: (3 * Math.PI) / 3,
    glowColor: "purple",
    label: "Next.js",
  },
  {
    id: "mysql",
    orbitRadius: 180,
    size: 40,
    speed: -0.6,
    iconType: "mysql",
    phaseShift: (5 * Math.PI) / 3,
    glowColor: "purple",
    label: "MySQL",
  },
];

// --- Memoized Orbiting Skill Component ---
const OrbitingSkill = memo(({ config, angle }: OrbitingSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, iconType, label } = config;

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 20 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative w-full h-full p-2 bg-gray-800/90 backdrop-blur-sm
          rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${isHovered ? "scale-125 shadow-2xl" : "shadow-lg hover:shadow-xl"}
        `}
        style={{
          boxShadow: isHovered
            ? `0 0 30px ${iconComponents[iconType]?.color}40, 0 0 60px ${iconComponents[iconType]?.color}20`
            : undefined,
        }}
      >
        <SkillIcon type={iconType} />
        {isHovered && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900/95 backdrop-blur-sm rounded text-xs text-white whitespace-nowrap pointer-events-none">
            {label}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingSkill.displayName = "OrbitingSkill";

// --- Optimized Orbit Path Component ---
const GlowingOrbitPath = memo(
  ({
    radius,
    glowColor = "cyan",
    animationDelay = 0,
  }: GlowingOrbitPathProps) => {
    const glowColors = {
      cyan: {
        primary: "rgba(6, 182, 212, 0.4)",
        secondary: "rgba(6, 182, 212, 0.2)",
        border: "rgba(6, 182, 212, 0.3)",
      },
      purple: {
        primary: "rgba(147, 51, 234, 0.4)",
        secondary: "rgba(147, 51, 234, 0.2)",
        border: "rgba(147, 51, 234, 0.3)",
      },
    };

    const colors = glowColors[glowColor] || glowColors.cyan;

    return (
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          animationDelay: `${animationDelay}s`,
        }}
      >
        {/* Glowing background */}
        <div
          className="absolute inset-0 rounded-full animate-pulse"
          style={{
            background: `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`,
            boxShadow: `0 0 60px ${colors.primary}, inset 0 0 60px ${colors.secondary}`,
            animation: "pulse 4s ease-in-out infinite",
            animationDelay: `${animationDelay}s`,
          }}
        />

        {/* Static ring for depth */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: `1px solid ${colors.border}`,
            boxShadow: `inset 0 0 20px ${colors.secondary}`,
          }}
        />
      </div>
    );
  },
);
GlowingOrbitPath.displayName = "GlowingOrbitPath";

// --- Main App Component ---
export default function OrbitingSkills() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setTime((prevTime) => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const orbitConfigs: Array<{
    radius: number;
    glowColor: GlowColor;
    delay: number;
  }> = [
    { radius: 100, glowColor: "cyan", delay: 0 },
    { radius: 180, glowColor: "purple", delay: 1.5 },
  ];

  return (
    <main className="w-full flex items-center justify-end">
      <div
        className="relative w-[calc(100vw-40px)] h-[calc(100vw-40px)] md:w-[450px] md:h-[450px] flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Central "Code" Icon with enhanced glow */}
        <div className="w-20 h-20 bg-linear-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center z-10 relative shadow-2xl">
          <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-xl animate-pulse"></div>
          <div
            className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="relative z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="100%" stopColor="#9333EA" />
                </linearGradient>
              </defs>
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
        </div>

        {/* Render glowing orbit paths */}
        {orbitConfigs.map((config) => (
          <GlowingOrbitPath
            key={`path-${config.radius}`}
            radius={config.radius}
            glowColor={config.glowColor}
            animationDelay={config.delay}
          />
        ))}

        {/* Render orbiting skill icons */}
        {skillsConfig.map((config) => {
          const angle = time * config.speed + (config.phaseShift || 0);
          return (
            <OrbitingSkill key={config.id} config={config} angle={angle} />
          );
        })}
      </div>
    </main>
  );
}
