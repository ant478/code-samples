import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavigationSidebar = memo(({
  links,
}) => (
  <aside className="navigation-sidebar">
    <nav>
      <ul>
        {links.map(({ to, title, exact }) => (
          <li
            key={to}
          >
            <NavLink
              exact={exact}
              to={to}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </aside>
));

NavigationSidebar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      title: PropTypes.string,
      exact: PropTypes.bool,
    }),
  ).isRequired,
};

export default NavigationSidebar;
