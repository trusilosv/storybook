import React, { FC } from "react";

type TLoaderName = {
  name?: string | undefined;
};

export const Loader: FC<TLoaderName> = ({ name = "Loader" }) => {
  return (
    <div
      className="flex justify-center items-center w-56 h-56 absolute font-body text-sky-300 text-2xl 
       after:content-[''] after:rounded-full after:absolute after:w-full after:h-full after:shadow-1 
       after:animate-rotateAfter
          before:content-[''] before:rounded-full before:absolute before:w-full before:h-full before:shadow-2 
          before:animate-rotateBefore"
    >
      {name}
    </div>
  );
};
