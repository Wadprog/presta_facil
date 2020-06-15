import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styles from './MenuItem.module.scss';
import { string } from 'prop-types';
import classnames from 'classnames';

const TOP_OFFSET = 120;
const BOTTOM_OFFSET = 50;

const MenuItem = ({ itemName }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [active]);
  const handleScroll = () => {
    const elem = document.getElementById(`${itemName.replace(/\s/g, '')}`);
    let offsetTop = elem.offsetTop - TOP_OFFSET;
    let offsetBottom = offsetTop + elem.offsetHeight + BOTTOM_OFFSET;
    if (window.scrollY > offsetTop && window.scrollY < offsetBottom) {
      !active && setActive(true);
    } else {
      active && setActive(false);
    }
  };
  const classes = classnames({
    [styles.item]: true,
    [styles.active]: active,
  });
  return (
    <AnchorLink
      offset="110"
      href={`#${itemName.replace(/\s/g, '')}`}
      className={classes}
    >
      {itemName}
    </AnchorLink>
  );
};

MenuItem.propTypes = {
  itemName: string,
};

export default MenuItem;
