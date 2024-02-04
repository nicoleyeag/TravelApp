const ProfilePage = () => {
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
  return /*#__PURE__*/React.createElement("div", {
    className: "container mt-5"
  }, userData ?
  /*#__PURE__*/
  // Render user information if userData is available
  React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/React.createElement("img", {
    src: userData.photo_url,
    alt: "User",
    className: "img-fluid rounded-circle"
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-md-8"
  }, /*#__PURE__*/React.createElement("h1", null, "\uD83D\uDC4B ", userData.screen_name), /*#__PURE__*/React.createElement("p", null, "Email: ", userData.email))), userData.trips && userData.trips.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/React.createElement("h2", null, "My Trips"), /*#__PURE__*/React.createElement("ul", {
    className: "list-group"
  }, userData.trips.map(trip => /*#__PURE__*/React.createElement("li", {
    key: trip.trip_id,
    className: "list-group-item"
  }, trip.title)))), userData.wishlist && userData.wishlist.length > 0 && /*#__PURE__*/React.createElement("div", {
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
export default ProfilePage;