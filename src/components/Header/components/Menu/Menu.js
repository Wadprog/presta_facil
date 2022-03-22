import React, { useState, useContext } from 'react';
import style from './Menu.module.scss';
import { array, bool } from 'prop-types';
import classnames from 'classnames';
import MenuItem from '../MenuItem/MenuItem';
import { Link } from 'gatsby';
import LangContext from '@contexts';
import { langPath } from '@helpers';
const Menu = ({ data, open }) => {
  const [activeMenu, setActiveMenu] = useState('');
  const menuclass = classnames({
    [style.menu]: true,
    [style.open]: open,
  });
  const currentLang = useContext(LangContext);

  const handleActiveMenu = (title = '') => {
    if (title === activeMenu) {
      setActiveMenu('');
    } else {
      setActiveMenu(title);
    }
  };

  const [isLinkActive, setIsLinkActive] = useState(false);
  const link = langPath(currentLang) + '/' + 'blog';
  location.pathname === link && setIsLinkActive(true);

  const classItem = classnames({
    [style.link]: true,
    [style.linkActive]: isLinkActive,
  });

  return (
    <menu className={menuclass}>
      {data.map((item, index) => {
        return (
          <MenuItem
            {...item}
            key={index}
            index={index}
            activeMenu={activeMenu}
            handleActiveMenu={handleActiveMenu}
          />
        );
      })}
      <div className={classItem}>
        <Link
          className={style.link}
          activeClassName={style.linkActive}
          to={`${langPath(currentLang)}/blog`}
        >
          Blog
        </Link>
      </div>
    </menu>
  );
};

Menu.propTypes = {
  data: array,
  open: bool,
};

export default Menu;
