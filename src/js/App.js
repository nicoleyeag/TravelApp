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
ReactDOM.render(<Topnav />, document.getElementById('topnav'));


if (currentPage === '/excursions') {
    ReactDOM.render(<SearchBy />, document.getElementById('searchby'));
}

// if (currentPage === '/excursions') {
//     ReactDOM.render(<LocationId />, document.getElementById('locationid'));
//   }

if (currentPage === '/profile') {
    ReactDOM.render(<MyTrips />, document.getElementById('mytrips'));
}
  
if (currentPage === '/sign-up') {
    ReactDOM.render(<SignUpForm />, document.getElementById('signUpForm'));
}

if (currentPage === '/sign-in') {
    ReactDOM.render(<SignInForm />, document.getElementById('signInForm'));
}