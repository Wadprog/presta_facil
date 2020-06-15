import React from 'react';
import styles from './Sidebar.module.scss';
import { array } from 'prop-types';
import MenuGroup from './components/MenuGroup/MenuGroup';
import Button, { VARIANT } from '@components/Button/Button.js';

const Sidebar = ({ data }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.menu}>
        {data.map((item, index) => {
          return <MenuGroup {...item} key={`menugroup${index}`} />;
        })}
      </div>
      <div className={styles.buttonWrapper}>
        <Button variant={VARIANT.TRANSPARENT} fullWidth>
          download CCPA e-book
        </Button>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  data: array,
};

export default Sidebar;
