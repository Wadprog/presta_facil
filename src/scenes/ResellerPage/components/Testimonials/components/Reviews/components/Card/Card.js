import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import classnames from 'classnames';

import style from './Card.module.scss';
import stars from './images/starts.svg';

const Card = ({
  author,
  text,
  buttonText,
  buttonTextShort,
  buttonLink,
  logotype,
}) => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.author}>
          <RichText render={author} />
        </div>
        <div className={style.stars}>
          <img src={stars} alt="stars" draggable={false} />
        </div>
      </div>
      <div className={style.main}>
        <div className={style.text}>
          <RichText render={text} />
        </div>
      </div>
      <div className={style.footer}>
        <a
          href={RichText.asText(buttonLink)}
          target="_blank"
          rel="noopener noreferrer"
          className={style.link}
        >
          <span className={classnames(style.title, style.full)}>
            {RichText.asText(buttonText)}
          </span>
          <span className={classnames(style.title, style.short)}>
            {RichText.asText(buttonTextShort)}
          </span>
          <span className={style.logotype}>
            <img src={logotype.url} alt={logotype.alt} />
          </span>
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  author: PropTypes.array.isRequired,
  text: PropTypes.array.isRequired,
  buttonText: PropTypes.array.isRequired,
  buttonTextShort: PropTypes.array.isRequired,
  buttonLink: PropTypes.array.isRequired,
  logotype: PropTypes.object.isRequired,
};

export default Card;
