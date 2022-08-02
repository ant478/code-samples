import React, { memo } from 'react';

const FooterLink = memo(({
  icon: Icon,
  title = '',
  text = '',
  href = '',
}) => (
  <a
    className="footer-link"
    href={href}
    target="_blank"
    rel="noreferrer"
    title={title}
  >
    <Icon className="footer-link_icon" />
    {text && <span className="footer-link_text">{text}</span>}
  </a>
));

export default FooterLink;
