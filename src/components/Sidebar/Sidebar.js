import React from 'react';
import styles from './Sidebar.module.scss';
import { array } from 'prop-types';
import MenuGroup from './components/MenuGroup/MenuGroup';
const Sidebar = ({ data }) => {
  return (
    <div className={styles.sidebar}>
      {data.map((item, index) => {
        return <MenuGroup {...item} key={`menugroup${index}`} />;
      })}
    </div>
  );
};

Sidebar.propTypes = {
  data: array,
};

export default Sidebar;
