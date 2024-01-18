import React, { useEffect } from 'react';

// ------------------------------
// USE EFFECT FOR 

function LoginButton() {
  useEffect(() => {
    console.log('login button');

    // const button = document.querySelector('#login')

    const handleClick = () => {
      window.location.href = '/login';
    };
    // this is how i would write it in js
    // button.addEventListener('click', (evt) => {
    //     window.location.href = '/login';
    // })
    // button.addEventListener('click', handleClick);

    console.log('thing rendered');
    return () => {
      // button.removeEventListener('click', handleClick);
    };
  }, []); // the empty dependency array ensures that the effect runs only once

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    className: "buttons",
    id: "login",
    type: "submit"
  }, "Login"));
}
export default LoginButton;