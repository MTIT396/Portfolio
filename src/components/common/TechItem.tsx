import { TechIcon } from "@/types/type.type";
import Image from "next/image";
import React from "react";

const TechItem = ({ item }: { item: TechIcon }) => {
  return (
    <span
      key={item.name}
      className="cursor-default hover:drop-shadow-(--shadow-primary) transition duration-300 hover:scale-105 flex items-center gap-2 py-3 px-4 rounded-xl bg-bg/20 shadow-md shadow-primary/10 backdrop-blur-xl text-blue-200 text-sm"
    >
      <Image width={20} height={20} alt={item.name} src={item.iconUrl} />
      {item.name}
    </span>
  );
};

export default TechItem;
