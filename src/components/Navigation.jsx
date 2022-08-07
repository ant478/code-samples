import cx from 'classnames';
import React, { memo, useLayoutEffect } from 'react';
import { NavLink, matchPath } from 'react-router-dom';
import { headerScrollService } from 'src/services/scroll';
import { CATEGORY_IDS } from 'src/consts/categories';

const Navigation = memo(({
  className,
  links,
}) => {
  useLayoutEffect(() => {
    const categoryId = Object.values(CATEGORY_IDS).find((id) => matchPath(window.location.pathname, `/${id}`));

    if (!categoryId) {
      return;
    }

    const element = document.getElementById(`/${categoryId}`);

    if (!element) {
      return;
    }

    headerScrollService.scrollToElement(element);
  }, []);

  return (
    <nav className={cx('navigation', className)}>
      <ul className="navigation_list">
        {links.map(({ to, title, exact }) => (
          <li
            key={to}
            className="navigation_item"
          >
            <NavLink
              title={title}
              id={to}
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
  );
});

export default Navigation;
