import React from 'react';
import style from './Menu.module.scss';
import { array, bool } from 'prop-types';
import classnames from 'classnames';
import MenuItem from '../MenuItem/MenuItem';

const Menu = ({ data, open }) => {
  const menuclass = classnames({
    [style.menu]: true,
    [style.open]: open,
  });
  return (
    <menu className={menuclass}>
      {data.map((item, index) => {
        if (item.type === 'menu') {
          return <MenuItem {...item} key={index} />;
        }
      })}
    </menu>
  );
};

Menu.propTypes = {
  data: array,
  open: bool,
};

export default Menu;
