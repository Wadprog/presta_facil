import React, { useState, useEffect } from 'react';
import styles from './MenuGroup.module.scss';
import { array, object, bool } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import classnames from 'classnames';
import MenuItem from '../../components/MenuItem/MenuItem';
import Arrow from '../../image/arrow.inline.svg';

const MenuGroup = ({ primary, fields, isFirst }) => {
  const [active, setActive] = useState(false);
  const OFFSET = isFirst ? 1200 : 120;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [active]);
  const handleScroll = () => {
    const id = RichText.asText(primary.title).replace(/\s/g, '') + 'title';
    const elem = document.getElementById(`${id}`);
    let offsetTop = elem.offsetTop - OFFSET;
    let offsetBottom = offsetTop + elem.offsetHeight + OFFSET;
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
    <div className={classes} key={RichText.asText(primary.title)}>
      <div className={styles.title}>
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
