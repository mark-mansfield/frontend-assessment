import React from 'react';

// here I use a component for housing the layout
// The component grabs the children props
// Whatever component is listed in the current route
// will be passed into the layout in the children prop

const Layout = ({ children }) => <div>{children}</div>;

export default Layout;
