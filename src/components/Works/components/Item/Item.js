import React from 'react';
import style from './Item.module.scss';
import { RichText } from 'prismic-reactjs';
import { object, array } from 'prop-types';
import Image from '@components/Image/Image';

const Item = ({ screenshot, screenshotSharp, name, tag }) => {
  const tagList = tag[0].text.split(/\s*,\s*/);
  return (
    <div className={style.item}>
      <div className={style.imageBlock}>
        <Image image={screenshot} imageSharp={screenshotSharp} />
      </div>
      <div className={style.textBlock}>
        <div className={style.name}>
          <RichText render={name} />
        </div>
        <div className={style.tagList}>
          {tagList.map((tag, index) => {
            return (
              <div className={style.tag} key={`tag${index}${tag}`}>
                {tag}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  screenshotSharp: object,
  screenshot: object,
  name: array,
  tag: array,
};

export default Item;
