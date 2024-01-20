import Buttons from '/static/jsx/coreButton.js';
const RedirectButton = () => {
  const handleLoginClick = () => {
    // Use window.location.href to navigate to the desired URL
    window.location.href = '/login';
  };
  return /*#__PURE__*/React.createElement("button", {
    className: "coreButton",
    id: "login",
    type: "submit",
    onClick: handleLoginClick
  }, "Login");
};
export default RedirectButton;