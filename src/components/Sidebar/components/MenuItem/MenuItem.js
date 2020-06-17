import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styles from './MenuItem.module.scss';
import { string } from 'prop-types';
import { useScrollActiveElement } from '@hooks';

import classnames from 'classnames';

const TOP_OFFSET = 120;
const BOTTOM_OFFSET = 50;

const MenuItem = ({ itemName }) => {
  const elem = itemName.replace(/\s/g, '');
  const active = useScrollActiveElement(elem, TOP_OFFSET, BOTTOM_OFFSET);

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
