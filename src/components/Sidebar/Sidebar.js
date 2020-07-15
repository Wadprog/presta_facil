import React from 'react';
import styles from './Sidebar.module.scss';
import { array } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import MenuGroup from './components/MenuGroup/MenuGroup';
import Button, { VARIANT } from '@components/Button/Button.js';

const Sidebar = ({ data }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.menu}>
        {data.map((item, index) => {
          const isFirst = index === 0;
          const key = RichText.asText(item.primary.title);
          return <MenuGroup {...item} key={key} isFirst={isFirst} />;
        })}
      </div>
      <div className={styles.buttonWrapper}>
        <Button variant={VARIANT.TRANSPARENT} to="/books" fullWidth>
          download e-book
        </Button>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  data: array,
};

export default Sidebar;
