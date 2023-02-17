import React, { FC } from "react";

const linkClassName =
  "relative flex w-16 h-16 rounded-full no-underline before:content-[''] before:absolute before:w-full before:h-full before:transition-1 before:duration-1 before:ease before:border-2 before:rounded-full before:border-green-300 after:content-[''] after:absolute after:w-full after:h-full after:transition-1 after:duration-1 after:ease after:border-2 after:rounded-full after:border-green-300 hover:before:shadow-4";

const iClassName = "relative text-white text-2xl m-auto";

type TIconsMenuProps = {
  href1: string;
  href2: string;
  href3: string;
  href4: string;
  href5: string;
};

export const IconsMenu: FC<TIconsMenuProps> = ({
  href1 = "/home",
  href2 = "/my_page",
  href3 = "/menu",
  href4 = "/sign_in",
  href5 = "/contacts",
}) => {
  return (
    <div className="flex gap-6 bg-black">
      <div className="text-red-500">cwcwcewwc</div>
      <a href={href1} className={linkClassName}>
        <i className={`fa fa-home ${iClassName}`}></i>
      </a>
      <a href={href2} className={linkClassName}>
        <i className={`fa fa-user ${iClassName}`}></i>
      </a>
      <a href={href3} className={linkClassName}>
        <i className={`fa fa-bars ${iClassName}`}></i>
      </a>
      <a href={href4} className={linkClassName}>
        <i className={`fa fa-sign-in ${iClassName}`}></i>
      </a>
      <a href={href5} className={linkClassName}>
        <i className={`fa fa-phone ${iClassName}`}></i>
      </a>
    </div>
  );
};
