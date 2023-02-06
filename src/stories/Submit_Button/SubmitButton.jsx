import PropTypes from "prop-types";

// type TButtonSubmitProps = {
//   name: string;
// };

export const SubmitButton = ({ name }) => {
  return (
    <button
      aria-label="Submit Button"
      className="px-3 py-1 tracking-wider text-white  bg-green-500  hover:bg-green-600 lg:px-5 lg:py-1.5
    focus:outline-none shadow"
      type="submit"
    >
      {name}
    </button>
  );
};

export default SubmitButton;

SubmitButton.propTypes = {
  name: PropTypes.string.isRequired,
};

SubmitButton.defaultProps = {
  name: "Submit",
};
