import React from "react";

const TagsList = ({ tags }: { tags: string[] }) => {
  return (
    <ul className="flex gap-2 flex-wrap mb-4">
      {tags?.map((tag, index) => (
        <li
          className="text-xs border border-white/20 rounded-full  px-3 py-1 bg-gradient-to-br from-yellow-600/20 via-white/10 to-neutral-400/30 font-bold text-neutral-300 backdrop-blur-xs tracking-wide "
          key={index}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagsList;
