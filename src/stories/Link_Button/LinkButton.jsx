import PropTypes from "prop-types";

export const LinkButton = ({
  variant = undefined,
  href = "",
  name = "Link",
}) => {
  return (
    <a
      className={
        variant === "contained"
          ? "px-3.5 py-1.5 tracking-wider text-white no-underline  bg-green-500  hover:bg-green-600 lg:mt-7 lg:px-5.5 lg:py-2 focus:outline-none shadow"
          : "text-gray-700 hover:text-black underline tracking-wider"
      }
      href={href}
    >
      {name}
    </a>
  );
};
export default LinkButton;

LinkButton.propTypes = {
  variant: PropTypes.oneOf(["text", "contained", undefined]).isRequired,
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

// LinkButton.defaultProps = {
//   variant: undefined,
//   href: "",
//   name: "Link",
// };
