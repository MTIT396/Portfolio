import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "../ui/avatar";

type AvatarProps = {
  items: {
    name: string;
    iconUrl: string;
  }[];
};

const TRIGGER = 4;

const Avatars = ({ items }: AvatarProps) => {
  return (
    <div className="mt-6">
      <AvatarGroup>
        {items.map(
          (item, index) =>
            index < TRIGGER && (
              <Avatar key={item.name} className="bg-zinc-800 p-2.5 size-10">
                <AvatarImage src={item.iconUrl} alt={item.name} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            ),
        )}
        <AvatarGroupCount className="bg-zinc-800 size-10 text-zinc-400 text-base">
          +{items.length - TRIGGER}
        </AvatarGroupCount>
      </AvatarGroup>
    </div>
  );
};

export default Avatars;
