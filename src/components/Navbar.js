import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
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
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
