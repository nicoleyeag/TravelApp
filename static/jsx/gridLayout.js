// File: GridLayout.js

// import React from 'react';
// import * as ReactBootstrap from 'react-bootstrap';

export function GridLayout({
  children
}) {
  return /*#__PURE__*/React.createElement(ReactBootstrap.Container, null, children);
}
export function GridRow({
  children
}) {
  return /*#__PURE__*/React.createElement(ReactBootstrap.Row, null, children);
}
export function GridCol({
  children
}) {
  return /*#__PURE__*/React.createElement(ReactBootstrap.Col, null, children);
}