// import React from 'https://cdn.skypack.dev/react';
// import { createRoot } from 'https://cdn.skypack.dev/react-dom';
import Topnav from '/static/jsx/navbar.js';

// // this will have all my base components
// const domNode = document.getElementById('navigation');

// // Use createRoot and render the Navbar component
// const root = createRoot(domNode);
// root.render(<Navbar />);

ReactDOM.render( /*#__PURE__*/React.createElement(Topnav, null), document.getElementById('root'));