import React from 'react';
import { RichText } from 'prismic-reactjs';
import { object } from 'prop-types';

import style from './Item.module.scss';
import Image from '@components/Image/Image';

const Item = ({
  image,
  text,
  title,
  subtitle,
  checklist_negative,
  checklist_positive,
}) => {
  return (
    <div className={style.wrapperContainer}>
      <div className={style.textContainer}>
        <div className={style.title}>
          <RichText render={title.richText} />
        </div>
        <div className={style.subtitle}>
          <RichText render={subtitle.richText} />
        </div>
        <div className={style.text}>
          <RichText render={text.richText} />
        </div>
        {checklist_negative &&
        checklist_negative.richText &&
        checklist_negative.richText.length > 0 ? (
          <div className={style.checklist_negative}>
            <RichText render={checklist_negative.richText} />
          </div>
        ) : (
          ''
        )}
        {checklist_positive &&
        checklist_positive.richText &&
        checklist_positive.richText.length > 0 &&
        checklist_positive.richText[0].type !== 'paragraph' ? (
          <div className={style.checklist_positive}>
            <RichText render={checklist_positive.richText} />
          </div>
        ) : (
          ''
        )}
      </div>
      <div className={style.imageWrapper}>
        <Image image={image} className={style.image} />
      </div>
    </div>
  );
};
Item.propTypes = {
  image: object,
  text: object,
  title: object,
  subtitle: object,
  pagename: object,
  buttontext: object,
  checklist_positive: object,
  checklist_negative: object,
};

export default Item;
