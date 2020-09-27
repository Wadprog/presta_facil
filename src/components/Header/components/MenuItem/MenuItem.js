import React, { useState, useEffect, useContext } from 'react';
import style from './MenuItem.module.scss';
import { object, array, string, func } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Arrow from './image/arrow.inline.svg';
import Image from '@components/Image/Image';
import classnames from 'classnames';
import { Link } from 'gatsby';
import { globalHistory as history } from '@reach/router';
import LangContext from '@contexts';
import { langPath } from '@helpers';

const MenuItem = ({ primary, fields, activeMenu, handleActiveMenu }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [image, setImage] = useState(fields[activeImage].image);
  const [isLinkActive, setIsLinkActive] = useState(false);
  const { location } = history;
  const title = RichText.asText(primary.title);
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
    setImage(fields[activeImage].image);
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
            {fields.map((item, index) => {
              const text = RichText.asText(item.name);
              const link =
                langPath(currentLang) + '/' + RichText.asText(item.link);
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
            <Image image={image} />
          </div>
        </div>
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  primary: object,
  fields: array,
  activeMenu: string,
  handleActiveMenu: func,
  location: string,
};

export default MenuItem;
