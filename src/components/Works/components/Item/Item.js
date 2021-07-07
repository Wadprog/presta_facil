import React from 'react';
import style from './Item.module.scss';
import { RichText } from 'prismic-reactjs';
import { object } from 'prop-types';
import Image from '@components/Image/Image';
import { parseUrl } from '@helpers';

const Item = ({ link, screenshot, name, tag }) => {
  const tagList = tag.text ? tag.text.split(/\s*,\s*/) : null;
  const url = parseUrl(link);
  return (
    <a
      href={url}
      className={style.item}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={style.imageBlock}>
        <Image image={screenshot} fluid={screenshot.fluid} />
      </div>
      <div className={style.textBlock}>
        <div className={style.name}>
          <RichText render={name.raw} />
        </div>
        <div className={style.tagList}>
          {tagList &&
            tagList.map((tag, index) => {
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
  name: object,
  tag: object,
  link: object,
};

export default Item;
