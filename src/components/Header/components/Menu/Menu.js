import React from 'react';
import style from './Menu.module.scss';
import Arrow from './image/arrow.inline.svg';

const Menu = () => {
  return (
    <menu className={style.menu}>
      <li className={style.item}>
        Solutions <Arrow />
      </li>
      <li className={style.item}>
        Features <Arrow />
      </li>
      <li className={style.item}>
        Technologies <Arrow />
      </li>
      <li className={style.item}>
        Prices <Arrow />
      </li>
      <li className={style.item}>
        Resources <Arrow />
      </li>
    </menu>
  );
};

export default Menu;
