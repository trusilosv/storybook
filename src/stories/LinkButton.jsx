import React from 'react';
import PropTypes from 'prop-types';

export const LinkButton = (props) => {
  return (
    <a
      className={
        props.variant === "contained"
          ? "px-3.5 py-1.5 tracking-wider text-white no-underline  bg-green-500  hover:bg-green-600 lg:mt-7 lg:px-5.5 lg:py-2 focus:outline-none shadow"
          : "text-gray-700 hover:text-black underline tracking-wider"
      }
      href={props.href}
    >
      {props.name}
    </a>
  );
};
export default LinkButton;


LinkButton.propTypes = {
  variant: PropTypes.oneOf(["text", "contained", undefined]), 
  href: PropTypes.string,
  name: PropTypes.string
};

LinkButton.defaultProps = {
  variant: undefined,
  href: "",
  name: "Link"
};
