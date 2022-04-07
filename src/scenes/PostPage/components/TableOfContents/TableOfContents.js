import React from 'react';
import style from './TableOfContents.module.scss';
import { RichText } from 'prismic-reactjs';
import { object } from 'prop-types';
import * as prismicH from '@prismicio/helpers';
import { Link } from 'react-scroll';
import { useScrollDirection } from '@hooks';

const htmlSerializer = (type, element, key, children) => {
  const scrollDir = useScrollDirection();
  if (type === prismicH.Element.heading2) {
    let id = element.text.replace(/\W+/g, '-').toLowerCase();
    return (
      <Link
        activeClass={style.isCurrent}
        className={style.h2}
        to={id}
        spy={true}
        smooth={true}
        offset={scrollDir === 'up' ? -200 : -110}
      >
        {children}
      </Link>
    );
  }
  if (type === prismicH.Element.heading3) {
    let id = element.text.replace(/\W+/g, '-').toLowerCase();
    return (
      <Link
        activeClass={style.isCurrent}
        className={style.h3}
        to={id}
        spy={true}
        smooth={true}
        offset={scrollDir === 'up' ? -200 : -110}
      >
        {children}
      </Link>
    );
  }
};

const tableOfContents = ({ primary }) => {
  const { text } = primary;
  return (
    <RichText
      render={text.richText.filter(
        (val) => val.type === 'heading2' || val.type === 'heading3'
      )}
      htmlSerializer={htmlSerializer}
    />
  );
};

tableOfContents.propTypes = {
  primary: object,
};

export default tableOfContents;
