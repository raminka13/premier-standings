import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navigation() {
  const location = useLocation();
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
  ];
  return (
    <nav>
      <div className="navContainer">
        <ul className="navLinks">
          {links.map((link) => (
            <li className="NavLink" key={link.id}>
              <NavLink to={link.path}>
                {location.pathname === '/' ? '⚽️ HOME' : '◀︎ Back'}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
