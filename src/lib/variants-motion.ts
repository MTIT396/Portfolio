import { Variants } from "framer-motion";

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 12,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const rightInVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeInOut",
      duration: 1.5,
      type: "spring",
      delay: 0,
    },
  },
};
export const leftInVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.6,
      type: "spring",
      stiffness: 120,
      damping: 15,
      delay: 0,
    },
  },
};
const flyDirections = [
  { x: -120, y: 0 },
  { x: 120, y: 0 },
  { x: 0, y: -120 },
  { x: 0, y: 120 },
  { x: -90, y: -90 },
  { x: 90, y: -90 },
  { x: -90, y: 90 },
  { x: 90, y: 90 },
];

export const flyInVariants: Variants = {
  hidden: (index: number) => {
    const dir = flyDirections[index % flyDirections.length];
    return {
      opacity: 0,
      x: dir.x,
      y: dir.y,
      scale: 0.97, // gần 1 để không pop
    };
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 1, 0.5, 1], // mượt nhất, không snap-in
    },
  },
};
