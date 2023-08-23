import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ShowNavbar = ({ children }) => {
  const location = useLocation();

  const [showNavbar, setShowNavbar] = useState(false);
  useEffect(() => {
    if (
      location.pathname === '/home' ||
      location.pathname === '/profile' ||
      location.pathname === '/filter'
    ) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  }, [location]);
  return <div>{showNavbar && children}</div>;
};

export default ShowNavbar;
