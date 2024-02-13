// const Wave = () => {
//     return (
//         <div className="Wave">
//             <img src="static/img/Vector.png" alt="Vector Image" />
//             <div className="textboxTitle">Sign Up or Sign In to begin planning your next adventure!</div>
//             <div className="Buttons">
//                 <div className="Button">Start Planning</div>
//             </div>
//             <div className="textboxSignin">Create your account to enjoy the full suite of features, including the ability to save and revisit your trips, access detailed excursion information, and benefit from a seamless, dynamic planning experience.</div>
//         </div>
//     );
// };

// export default Wave;

const Wave = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "wave"
  }, /*#__PURE__*/React.createElement("div", {
    id: "imagewave"
  }, /*#__PURE__*/React.createElement("img", {
    id: "wavevector",
    src: "static/img/wave.png",
    alt: "Vector Image"
  })), /*#__PURE__*/React.createElement("div", {
    className: "waveText"
  }, /*#__PURE__*/React.createElement("img", {
    id: "aboutus",
    src: "static/img/midhomepage.png",
    alt: "Vector Image"
  })));
};
export default Wave;