            
function UserInfo({ userData }) {
    return (
        <div class="containerUserInfo">
            <div class="label email">Email: {userData.email}</div>
            {/* <div class="label location">Location</div> */}
            <div class="label name">Name: {userData.screen_name}</div>
            <img className="userImg" src='static/img/profilepic.jpg' alt="User" />
        </div>
    );
  }
  
  export default UserInfo;

