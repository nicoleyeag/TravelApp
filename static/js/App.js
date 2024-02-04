// import React from 'https://cdn.skypack.dev/react';
// import { createRoot } from 'https://cdn.skypack.dev/react-dom';
import Topnav from '/static/jsx/navbar.js';
// import Usernav from '/static/jsx/navbarUser.js';
import SearchBy from '/static/jsx/excursionSearch.js';
// import LocationId from '/static/jsx/locationId.js';
import SignUpForm from '/static/jsx/signUp.js';
import SignInForm from '/static/jsx/signIn.js';
import ProfilePage from '/static/jsx/profile.js';
import CreateTripForm from '/static/jsx/createTrip.js';
import TripList from '/static/jsx/myTrips.js';
import MyTripInfo from '/static/jsx/tripInfo.js';
// import isLoggedIn from '/static/jsx/auth.js';
// import RedirectButton from 'static/jsx/login.js';

// // this will have all my base components
// const domNode = document.getElementById('navigation');

// // Use createRoot and render the Navbar component
// const root = createRoot(domNode);
// root.render(<Navbar />);

const currentPage = window.location.pathname;

// NAVBAR
// add the use state here
// if user logged in load "user" nav bar
// else load normal bar
// const isUserLoggedIn = await isLoggedIn()

// if (isUserLoggedIn)  {
//     ReactDOM.render(<Usernav />, document.getElementById('topnav'));
// } else {
//     ReactDOM.render(<Topnav />, document.getElementById('topnav'));
// }

ReactDOM.render( /*#__PURE__*/React.createElement(Topnav, null), document.getElementById('topnav'));
if (currentPage === '/excursions') {
  ReactDOM.render( /*#__PURE__*/React.createElement(SearchBy, null), document.getElementById('searchby'));
}

// if (currentPage === '/excursions') {
//     ReactDOM.render(<LocationId />, document.getElementById('locationid'));
//   }

if (currentPage === '/sign-up') {
  ReactDOM.render( /*#__PURE__*/React.createElement(SignUpForm, null), document.getElementById('signUpForm'));
}
if (currentPage === '/sign-in') {
  ReactDOM.render( /*#__PURE__*/React.createElement(SignInForm, null), document.getElementById('signInForm'));
}
if (currentPage === '/profile') {
  ReactDOM.render( /*#__PURE__*/React.createElement(ProfilePage, null), document.getElementById('userProfile'));
  ReactDOM.render(React.createElement(CreateTripForm), document.getElementById('createTrip'));
  ReactDOM.render( /*#__PURE__*/React.createElement(TripList, null), document.getElementById('tripList'));
}
if (currentPage.startsWith('/trip-page')) {
  ReactDOM.render( /*#__PURE__*/React.createElement(MyTripInfo, null), document.getElementById('mytripinfo'));
}