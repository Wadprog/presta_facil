import React from 'react';
import style from './Item.module.scss';
import { RichText } from 'prismic-reactjs';
import { object, array } from 'prop-types';
import Image from '@components/Image/Image';
import { parseUrl } from '@helpers';

const Item = ({ link, screenshot, screenshotSharp, name, tag }) => {
  const tagList = tag ? tag[0].text.split(/\s*,\s*/) : null;
  const url = parseUrl(link);
  return (
    <a
      href={url}
      className={style.item}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={style.imageBlock}>
        <Image image={screenshot} imageSharp={screenshotSharp} />
      </div>
      <div className={style.textBlock}>
        <div className={style.name}>
          <RichText render={name} />
        </div>
        <div className={style.tagList}>
          {tagList && tagList.map((tag, index) => {
            return (
              <div className={style.tag} key={`tag${index}${tag}`}>
                {tag}
              </div>
            );
          })}
        </div>
      </div>
    </a>
  );
};

Item.propTypes = {
  screenshotSharp: object,
  screenshot: object,
  name: array,
  tag: array,
  link: object,
};

export default Item;
