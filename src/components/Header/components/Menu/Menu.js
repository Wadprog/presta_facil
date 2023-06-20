import React, { useState, useContext } from 'react';
import style from './Menu.module.scss';
import { array, bool, string, object } from 'prop-types';
import classnames from 'classnames';
import MenuItem from '../MenuItem/MenuItem';
// import { Link } from 'gatsby';
import LangContext from '@contexts';
import { langPath } from '@helpers';
import { globalHistory as history } from '@reach/router';

const Menu = ({ data, open, menuSingleData }) => {
  const [activeMenu, setActiveMenu] = useState('');

  const menuclass = classnames({
    [style.menu]: true,
    [style.open]: open,
  });
  const currentLang = useContext(LangContext);
  const { location } = history;

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
        {menuSingleData.items.map((val, i) => {
          return (
            <a
              key={i}
              href={val.menu_single_link.url}
              target="_blank"
              rel="noreferrer"
              className={style.link}
            >
              {val.menu_single_title.richText[0].text}
            </a>
          );
        })}
      </div>
    </menu>
  );
};

Menu.propTypes = {
  data: array,
  open: bool,
  location: string,
  menuSingleData: object,
};

export default Menu;
