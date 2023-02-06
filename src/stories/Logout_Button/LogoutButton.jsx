import axios from "axios";
import PropTypes from "prop-types";

export const LogoutButton = ({ logoutPath, token }) => {
  const signout = async () => {
    try {
      await axios.get(`/${logoutPath}/sign_out`, {
        headers: {
          // "Content-Type": "application/json",
          "X-CSRF-Token": token,
        },
      });
      window.location.assign("/");
    } catch (err) {}
  };

  return (
    <button aria-label="Logout Button" onClick={signout}>
      Logout
    </button>
  );
};
export default LogoutButton;

LogoutButton.propTypes = {
  logoutPath: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};

LogoutButton.defaultProps = {
  logoutPath: "",
  token: "",
};
