import React, { memo } from 'react';
import { EXPANDED_HEIGHT } from 'src/hooks/useFooterHeight';
import FooterLink from 'src/components/FooterLink';

const styles = { height: `${EXPANDED_HEIGHT}px` };

const ICON_PROPS = {
  facebook: {
    icon: require('src/img/social-icons/facebook.svg?svgr').default,
    href: 'https://www.facebook.com/ant478/',
    title: 'Facebook',
  },
  vk: {
    icon: require('src/img/social-icons/vk.svg?svgr').default,
    href: 'https://vk.com/ant478',
    title: 'VKontakte',
  },
  github: {
    icon: require('src/img/social-icons/github.svg?svgr').default,
    href: 'https://github.com/ant478',
    title: 'GitHub',
  },
  linkedin: {
    icon: require('src/img/social-icons/linkedin.svg?svgr').default,
    href: 'https://www.linkedin.com/in/ant478/',
    title: 'LinkedIn',
  },
  telegram: {
    icon: require('src/img/social-icons/telegram.svg?svgr').default,
    href: 'https://t.me/ant478',
    title: 'Telegram',
  },
  whatsapp: {
    icon: require('src/img/social-icons/whatsapp.svg?svgr').default,
    href: 'https://wa.me/375447092034',
    title: 'WhatsApp',
  },
  email: {
    icon: require('src/img/social-icons/email.svg?svgr').default,
    text: 'ant478@gmail.com',
    href: 'mailto:ant478@gmail.com',
    title: 'Email',
  },
  phone: {
    icon: require('src/img/social-icons/phone.svg?svgr').default,
    text: '+357 99 28-20-43',
    href: 'tel:+35799282043',
    title: 'Telephone',
  },
};

const LEFT_SIDE_ICONS = [ICON_PROPS.linkedin, ICON_PROPS.facebook, ICON_PROPS.telegram, ICON_PROPS.github, ICON_PROPS.vk, ICON_PROPS.whatsapp];
const RIGHT_SIDE_ICONS = [ICON_PROPS.email, ICON_PROPS.phone];

const Footer = memo(() => (
  <footer
    className="footer"
    style={styles}
  >
    <div className="footer_row-section footer_row-section__left">
      {LEFT_SIDE_ICONS.map((props, index) => (
        <div className="footer_link-cell" key={index}>
          <FooterLink {...props} />
        </div>
      ))}
    </div>
    <p className="footer_text">
      Designed and developed by
      {' '}
      <span className="footer_text-highlight">ant478</span>
    </p>
    <div className="footer_row-section footer_row-section__right">
      {RIGHT_SIDE_ICONS.map((props, index) => (
        <div className="footer_link-cell" key={index}>
          <FooterLink {...props} />
        </div>
      ))}
    </div>
  </footer>
));

export default Footer;
