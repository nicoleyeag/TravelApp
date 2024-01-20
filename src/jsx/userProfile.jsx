import Buttons from '/static/jsx/coreButton.js';


function UserProfile() {
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
      fetch('/api/user-profile')
        .then(response => response.json())
        .then(data => setUserData(data))
        .catch(error => console.error('Error fetching user data:', error));
    }, []); // Empty dependency array ensures the effect runs only once on mount
  
    return (
      <div>
        <h1>User Profile</h1>
        {userData && (
          <div>
            <p>Username: {userData.screen_name}</p>
            <p>Email: {userData.email}</p>
            {/* Render other user data as needed */}
          </div>
        )}
      </div>
    );
  }
  
  export default UserProfile;