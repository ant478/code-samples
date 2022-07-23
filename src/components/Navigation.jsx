import cx from 'classnames';
import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = memo(({
  className,
  links,
}) => (
  <nav className={cx('navigation', className)}>
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

export default Navigation;
