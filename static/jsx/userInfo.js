function UserInfo({
  userData
}) {
  return /*#__PURE__*/React.createElement("div", {
    class: "containerUserInfo"
  }, /*#__PURE__*/React.createElement("div", {
    class: "label email"
  }, "Email: ", userData.email), /*#__PURE__*/React.createElement("div", {
    class: "label name"
  }, "Name: ", userData.screen_name), /*#__PURE__*/React.createElement("img", {
    className: "userImg",
    src: "static/img/profilepic.jpg",
    alt: "User"
  }));
}
export default UserInfo;