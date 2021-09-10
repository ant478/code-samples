import React from 'react';
import { NavLink } from 'react-router-dom';

const ITEMS = [
  {
    to: '/',
    title: 'Home',
    exact: true,
  },
  {
    to: '/examples',
    title: 'Examples',
  },
  {
    to: '/links',
    title: 'Links',
  },
  {
    to: '/projects',
    title: 'Projects',
  },
];

const Navigation = () => (
  <nav className="navigation">
    <ul className="navigation_list">
      {ITEMS.map(({ to, title, exact }) => (
        <li
          key={to}
          className="navigation_item"
        >
          <NavLink
            exact={exact}
            className="navigation_item-link"
            activeClassName="navigation_item-link__active"
            title={title}
            to={to}
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
