// File: GridLayout.js

// import React from 'react';
// import * as ReactBootstrap from 'react-bootstrap';

export function GridLayout({ children }) {
  return <ReactBootstrap.Container>{children}</ReactBootstrap.Container>;
}

export function GridRow({ children }) {
  return <ReactBootstrap.Row>{children}</ReactBootstrap.Row>;
}

export function GridCol({ children }) {
  return <ReactBootstrap.Col>{children}</ReactBootstrap.Col>;
}
