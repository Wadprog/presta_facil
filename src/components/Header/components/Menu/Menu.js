import React, { useState } from 'react';
import style from './Menu.module.scss';
import { array, bool } from 'prop-types';
import classnames from 'classnames';
import MenuItem from '../MenuItem/MenuItem';

const Menu = ({ data, open }) => {
  const [activeMenu, setActiveMenu] = useState('');
  const menuclass = classnames({
    [style.menu]: true,
    [style.open]: open,
  });

  const handleActiveMenu = (title = '') => {
    if (title === activeMenu) {
      setActiveMenu('');
    } else {
      setActiveMenu(title);
    }
  };

  return (
    <menu className={menuclass}>
      {data.map((item, index) => {
        return (
          <MenuItem
            {...item}
            key={index}
            activeMenu={activeMenu}
            handleActiveMenu={handleActiveMenu}
          />
        );
      })}
    </menu>
  );
};

Menu.propTypes = {
  data: array,
  open: bool,
};

export default Menu;
