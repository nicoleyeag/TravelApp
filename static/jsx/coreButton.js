import React from 'https://cdn.skypack.dev/react';
import useReducer from 'https://cdn.skypack.dev/react';
const Buttons = ({
  onClickFunction
}) => {
  const [backgroundColor, setBackgroundColor] = useState('#d38b5d');
  const handleMouseEnter = () => {
    setBackgroundColor('#2c5530');
  };
  const handleMouseLeave = () => {
    setBackgroundColor('#d38b5d');
  };
  const handleMouseDown = () => {
    setBackgroundColor('#739e82');
  };
  return /*#__PURE__*/React.createElement("button", {
    className: "coreButton",
    style: {
      backgroundColor,
      transition: '0.7s'
    },
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onMouseDown: handleMouseDown,
    onClick: onClickFunction()
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-wrapper"
  }, "button"));
};

// Buttons.propTypes = {
//   property1: PropTypes.oneOf(['pressed', 'hover', 'default']),
// };

export default Buttons;

// // google buttons

// export const GoogleButton = ({ property1, className }) => {
//     const [state, dispatch] = useReducer(reducer, {
//         property1: property1 || "default",
//     });

//     return (
//         <div
//             className={`google-button ${state.property1} ${className}`}
//             onMouseLeave={() => {
//                 dispatch("mouse_leave");
//             }}
//             onMouseEnter={() => {
//                 dispatch("mouse_enter");
//             }}
//         >
//             <img
//                 className="google-logo"
//                 alt="Google logo"
//                 src={state.property1 === "variant-2" ? "image.png" : "google-logo.png"}
//             />
//         </div>
//     );
// };

// function reducer(state, action) {
//     switch (action) {
//         case "mouse_enter":
//             return {
//                 ...state,
//                 property1: "variant-2",
//             };

//         case "mouse_leave":
//             return {
//                 ...state,
//                 property1: "default",
//             };
//     }

//     return state;
// }

// GoogleButton.propTypes = {
//     property1: PropTypes.oneOf(["variant-2", "default"]),
// };