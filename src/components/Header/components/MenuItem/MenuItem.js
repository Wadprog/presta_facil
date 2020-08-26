import React, { useState, useEffect } from 'react';
import style from './MenuItem.module.scss';
import { object, array, string, func } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Arrow from './image/arrow.inline.svg';
import Image from '@components/Image/Image';
import classnames from 'classnames';
import { Link } from 'gatsby';

const MenuItem = ({ primary, fields, activeMenu, handleActiveMenu }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [image, setImage] = useState(fields[activeImage].image);

  useEffect(() => {
    setImage(fields[activeImage].image);
  }, [activeImage]);

  const handleMouseEnter = (id) => {
    setActiveImage(id);
  };
  const title = RichText.asText(primary.title);

  const handleClick = () => {
    if (document.querySelector('html').classList.contains('fixed')) {
      document.querySelector('html').classList.remove('fixed');
    }
  };

  const classItem = classnames({
    [style.item]: true,
    [style[title]]: true,
    [style.open]: activeMenu === title,
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
              const link = '/' + RichText.asText(item.link);
              return (
                <Link
                  to={link}
                  className={style.link}
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
};

export default MenuItem;
