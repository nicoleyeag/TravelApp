import Buttons from '/static/jsx/coreButton.js';
function UserProfile() {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    fetch('/api/user-profile').then(response => response.json()).then(data => setUserData(data)).catch(error => console.error('Error fetching user data:', error));
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "User Profile"), userData && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Username: ", userData.screen_name), /*#__PURE__*/React.createElement("p", null, "Email: ", userData.email)));
}
export default UserProfile;