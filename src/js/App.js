// import React from 'https://cdn.skypack.dev/react';
// import { createRoot } from 'https://cdn.skypack.dev/react-dom';
import Topnav from '/static/jsx/navbar.js';
// import Usernav from '/static/jsx/navbarUser.js';
import SearchBy from '/static/jsx/excursionSearch.js';
// import LocationId from '/static/jsx/locationId.js';
import SignUpForm from '/static/jsx/signUp.js';
import SignInForm from '/static/jsx/signIn.js';
import ProfileUserInfo from '/static/jsx/profileUserInfo.js'
import Mid from '/static/jsx/midProfile.js'
import TripList from '/static/jsx/myTrips.js'
import MyTripInfo from '/static/jsx/tripInfo.js';
import Banner from '/static/jsx/banner.js'
import Wave from '/static/jsx/wave.js'
// import RedirectButton from 'static/jsx/login.js';


    

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

ReactDOM.render(<Topnav />, document.getElementById('topnav'));



if (currentPage === '/') {
    ReactDOM.render(<Banner />, document.getElementById('banner'));
    ReactDOM.render(<Wave />, document.getElementById('wave'));
}


if (currentPage === '/excursions') {
    ReactDOM.render(<SearchBy />, document.getElementById('searchby'));
}

// if (currentPage === '/excursions') {
//     ReactDOM.render(<LocationId />, document.getElementById('locationid'));
//   }


if (currentPage === '/sign-up') {
    ReactDOM.render(<SignUpForm />, document.getElementById('signUpForm'));
}

if (currentPage === '/sign-in') {
    ReactDOM.render(<SignInForm />, document.getElementById('signInForm'));
}

if (currentPage === '/profile') {
    ReactDOM.render(<ProfileUserInfo />, document.getElementById('userProfile'));
    ReactDOM.render(<Mid />, document.getElementById('midProfile'));
    ReactDOM.render(<TripList />, document.getElementById('tripList'));
}


if (currentPage.startsWith('/trip-page')) {
    ReactDOM.render(<MyTripInfo />, document.getElementById('mytripinfo'));
}


