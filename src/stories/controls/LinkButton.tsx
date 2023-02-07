import React from "react";
import cn from "classnames";

export type LinkButtonProps = {
  href: string,
  name: string,
  variant?: "contained"
}

export const LinkButton = ({ href ="", name="", variant  }: LinkButtonProps) => {
  return (
    <a
      className={cn({
        "px-3.5 py-1.5 tracking-wider text-white no-underline  bg-green-500  hover:bg-green-600 lg:px-5.5 lg:py-2 focus:outline-none shadow" : variant ==="contained",
        "text-gray-700 hover:text-black tracking-wider" : !variant 
      })}
      href={href}
    >
      {name}
    </a>
  );
};
export default LinkButton;
