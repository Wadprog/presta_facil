import React, { useState, useEffect, useContext } from 'react';
import { object, array, string, func } from 'prop-types';
import classnames from 'classnames';
import { Link } from 'gatsby';
import { globalHistory as history } from '@reach/router';

import Arrow from './image/arrow.inline.svg';
import LangContext from '@contexts';
import { langPath } from '@helpers';
import style from './MenuItem.module.scss';

const MenuItem = ({ primary, items, activeMenu, handleActiveMenu }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [image, setImage] = useState(items[activeImage].image);
  const [isLinkActive, setIsLinkActive] = useState(false);
  const { location } = history;
  const title = primary.title.text;
  const currentLang = useContext(LangContext);

  const handleMouseEnter = (id) => {
    setActiveImage(id);
  };

  const handleClick = () => {
    if (document.querySelector('html').classList.contains('fixed')) {
      document.querySelector('html').classList.remove('fixed');
    }
  };

  useEffect(() => {
    setImage(items[activeImage].image);
  }, [activeImage]);

  const classItem = classnames({
    [style.item]: true,
    [style[title]]: true,
    [style.open]: activeMenu === title,
    [style.linkActive]: isLinkActive,
  });

  return (
    <div
      className={classItem}
      onClick={() => handleActiveMenu(title)}
      onMouseLeave={() => handleActiveMenu('')}
    >
      {title}
      <Arrow />
      <div className={style.submenu}>
        <div className={style.container}>
          <div className={style.list}>
            {items.map((item, index) => {
              const text = item.name.text;
              let link;
              if (item.externallink.url) {
                link = item.externallink.url;
                location.pathname === link && setIsLinkActive(true);
                return (
                  <a
                    href={link}
                    className={style.link}
                    activeClassName={style.linkActive}
                    key={text}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onClick={handleClick}
                  >
                    {text}
                  </a>
                );
              }
              link = langPath(currentLang) + '/' + item.link.text.toLowerCase();
              location.pathname === link && setIsLinkActive(true);
              return (
                <Link
                  to={link}
                  className={style.link}
                  activeClassName={style.linkActive}
                  key={text}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onClick={handleClick}
                >
                  {text}
                </Link>
              );
            })}
          </div>
          <div className={style.imageWrapper}>
            <img src={image.url} alt={image.alt} loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  primary: object,
  items: array,
  activeMenu: string,
  handleActiveMenu: func,
  location: string,
};

export default MenuItem;
