import React, { memo } from 'react';
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
            className="navigation-sidebar_item"
          >
            <NavLink
              className="navigation-sidebar_item-link"
              activeClassName="navigation-sidebar_item-link__active"
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

export default NavigationSidebar;
