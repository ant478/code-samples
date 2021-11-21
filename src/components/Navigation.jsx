import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navigation = memo(({
  links,
}) => (
  <nav className="navigation">
    <ul className="navigation_list">
      {links.map(({ to, title, exact }) => (
        <li
          key={to}
          className="navigation_item"
        >
          <NavLink
            exact={exact}
            className="navigation_item-link"
            activeClassName="navigation_item-link__active"
            to={to}
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
));

Navigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      title: PropTypes.string,
      exact: PropTypes.bool,
    }),
  ).isRequired,
};

export default Navigation;
