import React, { useState, useEffect } from 'react';
import style from './MenuItem.module.scss';
import { object, array } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Arrow from './image/arrow.inline.svg';
import Image from '@components/Image/Image';
import classnames from 'classnames';
import { Link } from 'gatsby';

const MenuItem = ({ primary, fields }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(fields[activeImage].image);
  useEffect(() => {
    setImage(fields[activeImage].image);
  }, [activeImage]);

  const handleMouseEnter = (id) => {
    setActiveImage(id);
  };
  const title = RichText.asText(primary.title);

  const toggleOpenSubMenu = () => {
    setOpen(!open);
  };

  const classItem = classnames({
    [style.item]: true,
    [style[title]]: true,
    [style.open]: open,
  });

  return (
    <li className={classItem} onClick={toggleOpenSubMenu}>
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
    </li>
  );
};

MenuItem.propTypes = {
  primary: object,
  fields: array,
};

export default MenuItem;
