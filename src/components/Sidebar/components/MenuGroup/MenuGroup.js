import React, { useState, useEffect } from 'react';
import styles from './MenuGroup.module.scss';
import { array, object, bool } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import classnames from 'classnames';
import MenuItem from '../../components/MenuItem/MenuItem';
import Arrow from '../../image/arrow.inline.svg';
import { useScrollActiveElement } from '@hooks';

const HEADER_HEIGHT = 120;

const MenuGroup = ({ primary, fields, isFirst }) => {
  const [isOpen, setIsOpen] = useState(false);
  const elem = RichText.asText(primary.title).replace(/\s/g, '') + 'title';
  const OFFSET = isFirst ? 1200 : HEADER_HEIGHT; // 1200 this is offset for first element, it must be open
  const active = useScrollActiveElement(elem, OFFSET, OFFSET);

  const classes = classnames({
    [styles.item]: true,
    [styles.active]: active || isOpen,
  });
  useEffect(() => {
    setIsOpen(active);
  }, [active]);

  const handleToggleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={classes}>
      <div className={styles.title} onClick={handleToggleClick}>
        <RichText render={primary.title} />
        <Arrow className={styles.arrow} />
      </div>
      <div className={styles.list}>
        {fields.map((item) => {
          const title = RichText.asText(item.title);
          return <MenuItem itemName={title} key={title} />;
        })}
      </div>
    </div>
  );
};

MenuGroup.propTypes = {
  primary: object,
  fields: array,
  isFirst: bool,
};

export default MenuGroup;
