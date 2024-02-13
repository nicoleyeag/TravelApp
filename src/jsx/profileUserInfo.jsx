import UserInfo from '/static/jsx/userInfo.js'

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
  
    return (
      <div >
        {userData ? (
          // Render user information if userData is available
          <>
        <UserInfo userData={userData}/>
  
  

          {userData.trips && userData.trips.length > 0 && (
            <UserTrips userData={userData} />
          )}
  
            {/* Wishlist */}
            {userData.wishlist && userData.wishlist.length > 0 && (
              <div className="mt-4">
                <h2>Wishlist</h2>
                <ul className="list-group">
                  {userData.wishlist.map((item) => (
                    <li key={item.wishlist_id} className="list-group-item">
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        ) : (
          // Render a loading message if userData is still null
          <div>Loading...</div>
        )}
      </div>
    );
  };
  
  export default ProfileUserInfo;
  