import PropTypes from "prop-types";

function AlertButton({ message }) {
  const handleClick = () => alert(message);

  return <button onClick={handleClick}>Show Details</button>;
}

AlertButton.propTypes = {
  message: PropTypes.string.isRequired,
};

export default AlertButton;
