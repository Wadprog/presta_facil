import React from 'react';
import { RichText } from 'prismic-reactjs';
import { object } from 'prop-types';

import style from './Item.module.scss';
import Image from '@components/Image/Image';

const Item = ({
  image,
  text,
  title,
  checklist_negative,
  checklist_positive,
}) => {
  return (
    <div className={style.wrapperContainer}>
      <div className={style.textContainer}>
        <div className={style.title}>
          <RichText render={title.richText} />
        </div>
        <div className={style.text}>
          <RichText render={text.richText} />
        </div>
        <div className={style.checklist_negative}>
          <RichText render={checklist_negative.richText} />
        </div>
        <div className={style.checklist_positive}>
          <RichText render={checklist_positive.richText} />
        </div>
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
  pagename: object,
  buttontext: object,
  checklist_positive: object,
  checklist_negative: object,
};

export default Item;
