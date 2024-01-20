// import React from 'https://cdn.skypack.dev/react';
// import { createRoot } from 'https://cdn.skypack.dev/react-dom';
import Topnav from '/static/jsx/navbar.js';
import SearchBy from '/static/jsx/excursionSearch.js';
// import LocationId from '/static/jsx/locationId.js';
import MyTrips from '/static/jsx/profile.js';
import SignUpForm from '/static/jsx/signUp.js';
import SignInForm from '/static/jsx/signIn.js';
// import RedirectButton from 'static/jsx/login.js';

// // this will have all my base components
// const domNode = document.getElementById('navigation');

// // Use createRoot and render the Navbar component
// const root = createRoot(domNode);
// root.render(<Navbar />);

const currentPage = window.location.pathname;

// NAVBAR
ReactDOM.render( /*#__PURE__*/React.createElement(Topnav, null), document.getElementById('topnav'));
if (currentPage === '/excursions') {
  ReactDOM.render( /*#__PURE__*/React.createElement(SearchBy, null), document.getElementById('searchby'));
}

// if (currentPage === '/excursions') {
//     ReactDOM.render(<LocationId />, document.getElementById('locationid'));
//   }

if (currentPage === '/profile') {
  ReactDOM.render( /*#__PURE__*/React.createElement(MyTrips, null), document.getElementById('mytrips'));
}
if (currentPage === '/sign-up') {
  ReactDOM.render( /*#__PURE__*/React.createElement(SignUpForm, null), document.getElementById('signUpForm'));
}
if (currentPage === '/sign-in') {
  ReactDOM.render( /*#__PURE__*/React.createElement(SignInForm, null), document.getElementById('signInForm'));
}