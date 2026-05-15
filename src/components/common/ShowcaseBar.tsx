import { showcases } from "@/lib/data";
import { LucideProps } from "lucide-react";
import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ShowcaseItemProps {
  id: number;
  title: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  selectedShowcase: number;
  setSelectedShowcase: React.Dispatch<React.SetStateAction<number>>;
}

export const ShowcaseItem = ({
  id,
  title,
  icon,
  selectedShowcase,
  setSelectedShowcase,
}: ShowcaseItemProps) => {
  const Icon = icon;
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setSelectedShowcase(id);
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 700);
  };

  return (
    <motion.div
      onClick={handleClick}
      whileTap={{ scale: 0.95 }}
      className={`${
        selectedShowcase === id ? "bg-primary/20" : ""
      } py-2.5 cursor-pointer relative group overflow-hidden text-white flex flex-col gap-y-1 items-center hover:bg-primary/20 rounded-lg duration-300 transition-colors`}
    >
      {/* Gradient overlay khi hover */}
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
      />

      {/* Shine effect khi hover */}
      <motion.div
        className="absolute inset-0 bg-linear-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
        style={{ transform: "skewX(-20deg)" }}
      />

      {/* Shine effect khi click */}
      <AnimatePresence>
        {isClicked && (
          <motion.div
            className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent"
            style={{ transform: "skewX(-20deg)" }}
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
          />
        )}
      </AnimatePresence>

      {/* Ripple effect khi click */}
      <AnimatePresence>
        {isClicked && (
          <motion.div
            className="absolute inset-0 bg-primary/30 rounded-lg"
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 2.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      <Icon
        size={20}
        className="transition-colors duration-300 text-white/50"
      />

      <span className="relative text-xs sm:text-base z-10 font-semibold transition-colors duration-300">
        {title}
      </span>
    </motion.div>
  );
};

const ShowcaseBar = ({
  selectedShowcase,
  setSelectedShowcase,
}: {
  selectedShowcase: number;
  setSelectedShowcase: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="grid grid-cols-3 content-center gap-2 p-2 border border-primary/20 bg-primary/10 backdrop-blur-md rounded-lg mt-8">
      {showcases.map((item) => (
        <ShowcaseItem
          selectedShowcase={selectedShowcase}
          setSelectedShowcase={setSelectedShowcase}
          key={item.id}
          id={item.id}
          title={item.title}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default ShowcaseBar;
