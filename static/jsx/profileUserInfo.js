import UserInfo from '/static/jsx/userInfo.js';
const ProfileUserInfo = () => {
  const [userData, setUserData] = React.useState(null);
  const fetchUserData = async () => {
    try {
      const response = await fetch('/check_login');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  React.useEffect(() => {
    fetchUserData();
  }, []);
  return /*#__PURE__*/React.createElement("div", null, userData ?
  /*#__PURE__*/
  // Render user information if userData is available
  React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(UserInfo, {
    userData: userData
  }), userData.trips && userData.trips.length > 0 && /*#__PURE__*/React.createElement(UserTrips, {
    userData: userData
  }), userData.wishlist && userData.wishlist.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/React.createElement("h2", null, "Wishlist"), /*#__PURE__*/React.createElement("ul", {
    className: "list-group"
  }, userData.wishlist.map(item => /*#__PURE__*/React.createElement("li", {
    key: item.wishlist_id,
    className: "list-group-item"
  }, item.title))))) :
  /*#__PURE__*/
  // Render a loading message if userData is still null
  React.createElement("div", null, "Loading..."));
};
export default ProfileUserInfo;