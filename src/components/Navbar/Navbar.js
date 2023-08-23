import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import FilterListIcon from '@mui/icons-material/FilterList';
import Drawer from '@mui/material/Drawer';
import Logo from '../../logo.svg';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();

    localStorage.clear();
    setOpen(false);

    navigate('/');
  };

  return (
    <div>
      <navbar className="navbar">
        <div className="navbar_item">
          <Link to="#">
            <MenuIcon onClick={() => setOpen(!open)} />
          </Link>
        </div>
        <div className="navbar_item">
          <span className="navbar_item_title">Award</span>
        </div>
        <div className="navbar_item">
          <Link to="/filter">
            <FilterListIcon />
          </Link>
        </div>
      </navbar>

      <Drawer
        PaperProps={{
          md: { width: '90%' },
        }}
        open={open}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className="drawer_item">
          <img src={Logo} alt="logo" />
          <Link to="/home" className="drawer_tem_link">
            <span>Home</span>
          </Link>
          <Link to="/cards" className="drawer_tem_link">
            <span>Cards</span>
          </Link>
          <Link to="/profile" className="drawer_tem_link">
            <span>Profile</span>
          </Link>
          <Link to="#" className="drawer_tem_link">
            <span onClick={handleLogout}>Logout</span>
          </Link>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
