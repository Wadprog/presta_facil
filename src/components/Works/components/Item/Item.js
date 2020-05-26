import React from 'react';
import style from './Item.module.scss';
import { RichText } from 'prismic-reactjs';
import { object, array } from 'prop-types';
import Img from 'gatsby-image';

const Item = ({ screenshot, screenshotSharp, name, tag }) => {
  const tagList = tag[0].text.split(/\s*,\s*/);
  const image = screenshotSharp.childImageSharp.fluid || '';
  return (
    <div className={style.item}>
      <div className={style.imageBlock}>
        <Img fluid={image} alt={screenshot.alt} />
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
